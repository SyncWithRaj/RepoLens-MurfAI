import { QdrantClient } from "@qdrant/js-client-rest";

const COLLECTION = "repo_entities"

export class VectorInitService {

    private client: QdrantClient;

    constructor() {
        this.client = new QdrantClient({
            url: process.env.QDRANT_URL || "http://localhost:6333",
            apiKey: process.env.QDRANT_API_KEY!
        })
    }

    async initVectorCollection() {
        const collections = await this.client.getCollections();

        const exists = collections.collections.find(
            (c) => c.name === COLLECTION
        )

        if (exists) {
            // Ensure payload index exists even if collection already exists
            try {
                await this.client.createPayloadIndex(COLLECTION, {
                    field_name: "metadata.fingerprint",
                    field_schema: "keyword",
                    wait: true
                });
            } catch (e: any) {
                console.log("Index creation skipped/failed:", e.message);
            }
            return {
                message: "Collection already exists, ensured payload index is present"
            }
        }

        await this.client.createCollection(COLLECTION, {
            vectors: {
                size: 3072,
                distance: "Cosine"
            }
        });

        await this.client.createPayloadIndex(COLLECTION, {
            field_name: "metadata.fingerprint",
            field_schema: "keyword",
            wait: true
        });

        return {
            message: "repo_entities collection and payload index created"
        }
    }
}