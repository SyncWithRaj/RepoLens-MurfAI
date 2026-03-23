import Link from "next/link";
import { CheckCircle, Blocks, Workflow, Search, Github, TerminalSquare, Eye, Fingerprint } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-grow w-full overflow-hidden bg-[#010409] text-[#c9d1d9] pb-24 selection:bg-[#58a6ff] selection:text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

      {/* Header Section */}
      <section className="relative w-full px-6 pt-32 pb-20 border-b border-[#30363d] bg-gradient-to-b from-[#161b22] to-[#010409] flex flex-col justify-center items-center">
        <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-[#58a6ff] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#21262d] border border-[#30363d] text-xs font-semibold text-[#8b949e] mb-6 shadow-sm">
             <Fingerprint size={12} className="text-[#a371f7]" />
             Enterprise System Documentation
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Comprehensive <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]">Codebase Telemetry</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#8b949e] leading-relaxed font-light">
            RepoLens Technologies Pvt. Ltd. architects precision tools for indexing, embedding, and visualizing the entire structural hierarchy of complex monolithic and microservice repositories.
          </p>
        </div>
      </section>

      {/* Technical Architecture Deep Dive */}
      <section className="max-w-6xl w-full mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Under The Hood: System Architecture</h2>
          <p className="text-[#8b949e] max-w-2xl mx-auto font-light">
            We don't just grep files. Our telemetry engine leverages advanced AST generation, embedded vector models, and intelligent visual mapping algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
             <div className="group flex items-start gap-5">
               <div className="w-14 h-14 rounded-xl bg-[#161b22] border border-[#30363d] flex-shrink-0 flex items-center justify-center group-hover:border-[#58a6ff]/50 transition-colors shadow-sm">
                 <Blocks className="w-6 h-6 text-[#58a6ff]" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#58a6ff] transition-colors">Language-Agnostic Tree Parsing</h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed">
                    Once a repository is ingested, our backend pipeline dynamically spawns AST parsers tailored to the detected language frameworks (React, Python FastAPI, Go, etc.). It shreds files into their discrete functional nodes, tracking precise start and end lines.
                  </p>
               </div>
             </div>

             <div className="group flex items-start gap-5">
               <div className="w-14 h-14 rounded-xl bg-[#161b22] border border-[#30363d] flex-shrink-0 flex items-center justify-center group-hover:border-[#a371f7]/50 transition-colors shadow-sm">
                 <Search className="w-6 h-6 text-[#a371f7]" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#a371f7] transition-colors">Vector Embedding Store (Pinecone)</h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed">
                    By feeding extracted logic through `text-embedding-3`, we map 1536-dimensional semantic vectors into Pinecone indices. This unlocks the ability to query "Where are database transactions committed?" independent of explicit keyword presence.
                  </p>
               </div>
             </div>

             <div className="group flex items-start gap-5">
               <div className="w-14 h-14 rounded-xl bg-[#161b22] border border-[#30363d] flex-shrink-0 flex items-center justify-center group-hover:border-[#2ea043]/50 transition-colors shadow-sm">
                 <Workflow className="w-6 h-6 text-[#2ea043]" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#2ea043] transition-colors">Force-Directed Visual Mapping</h3>
                  <p className="text-sm text-[#8b949e] leading-relaxed">
                    Using `react-force-graph-2d`, RepoLens translates your directory structure and file dependencies into an interactive stellar map. Hover physics directly interface with Monaco Editor contexts via the proprietary `EditorContext`.
                  </p>
               </div>
             </div>
          </div>

          <div className="bg-[#0d1117] border border-[#30363d] rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#58a6ff]/5 to-[#a371f7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <span className="text-xs font-mono text-[#8b949e] ml-2">architecture.md</span>
             </div>
             <code className="block text-xs md:text-sm font-mono text-[#c9d1d9] leading-loose">
                <span className="text-[#ff7b72]">class</span> <span className="text-[#d2a8ff]">RepoLensEngine</span> {"{"}<br/>
                &nbsp;&nbsp;<span className="text-[#8b949e]">/**</span><br/>
                &nbsp;&nbsp;<span className="text-[#8b949e]"> * @method InitRAGPipeline</span><br/>
                &nbsp;&nbsp;<span className="text-[#8b949e]"> */</span><br/>
                &nbsp;&nbsp;<span className="text-[#ff7b72]">async</span> <span className="text-[#d2a8ff]">executeQuery</span>(<span className="text-[#a5d6ff]">userPrompt</span>) {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> <span className="text-[#a5d6ff]">vector</span> = <span className="text-[#ff7b72]">await</span> <span className="text-[#79c0ff]">embed</span>(userPrompt);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">const</span> <span className="text-[#a5d6ff]">context</span> = <span className="text-[#79c0ff]">pineconeSearch</span>(vector, <span className="text-[#a5d6ff]">topK</span>=<span className="text-[#79c0ff]">5</span>);<br/><br/>
                
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> <span className="text-[#d2a8ff]">synthesizeLLM</span>(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">context</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">strictFactualAdherence</span>: <span className="text-[#79c0ff]">true</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;{"}"}<br/>
                {"}"}
             </code>
          </div>

        </div>
      </section>

      {/* Core Values Minimalist Grid */}
      <section className="w-full bg-[#0d1117] border-y border-[#30363d] py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="space-y-3">
              <CheckCircle className="w-8 h-8 text-[#58a6ff] mb-4" />
              <h4 className="text-white font-semibold text-lg">Zero Retention Model</h4>
              <p className="text-[#8b949e] text-sm">LLMs only process explicit chunks retrieved via RAG. Code is never logged for foundational training.</p>
           </div>
           <div className="space-y-3">
              <Eye className="w-8 h-8 text-[#a371f7] mb-4" />
              <h4 className="text-white font-semibold text-lg">Holistic Visibility</h4>
              <p className="text-[#8b949e] text-sm">Visualize cyclical dependencies immediately with GPU-accelerated massive dynamic graphs.</p>
           </div>
           <div className="space-y-3">
              <TerminalSquare className="w-8 h-8 text-[#2ea043] mb-4" />
              <h4 className="text-white font-semibold text-lg">Native Editor Bindings</h4>
              <p className="text-[#8b949e] text-sm">Monaco editor binds strictly to retrieved AST start lines, scrolling immediately to queried functions.</p>
           </div>
           <div className="space-y-3">
              <CheckCircle className="w-8 h-8 text-[#e3b341] mb-4" />
              <h4 className="text-white font-semibold text-lg">Sub-200ms Search</h4>
              <p className="text-[#8b949e] text-sm">Indexes are optimized to answer structural queries at speeds typical dashboards cannot match.</p>
           </div>
        </div>
      </section>

    </div>
  );
}
