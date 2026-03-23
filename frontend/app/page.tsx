import Link from "next/link";
import { ArrowRight, Code2, Database, MessageSquare, Zap, Shield, Globe, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center w-full overflow-hidden selection:bg-[#58a6ff] selection:text-white pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#58a6ff] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#a371f7] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl w-full text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs font-semibold text-[#8b949e] mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#3fb950] animate-pulse"></span>
            RepoLens AI Engine v2.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 leading-tight">
            Understand your codebase. <br className="hidden md:block" />
            <span className="text-[#58a6ff]">Faster than ever.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#8b949e] mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            RepoLens utilizes advanced AI vector embeddings to map your entire repository. Stop reading thousands of lines of code—start asking questions and get exact, contextual explanations instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="group flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white border border-[rgba(240,246,252,0.1)] transition-all duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(35,134,54,0.4)] hover:shadow-[0_0_25px_rgba(46,160,67,0.6)]"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] border border-[#30363d] transition-all duration-300 w-full sm:w-auto shadow-sm"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section / Social Proof (Placeholder) */}
      <section className="w-full border-y border-[#30363d] bg-[#0d1117]/80 backdrop-blur-md py-10 z-10 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#8b949e]">
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">10M+</span>
            <span className="text-sm font-medium">Lines Indexed</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">50k+</span>
            <span className="text-sm font-medium">Queries Answered</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">99.9%</span>
            <span className="text-sm font-medium">Uptime SLA</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">&lt;200ms</span>
            <span className="text-sm font-medium">Avg Response</span>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="w-full max-w-6xl mx-auto py-24 px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Powerful capabilities out of the box</h2>
           <p className="text-[#8b949e] max-w-2xl mx-auto text-lg">Everything you need to navigate, analyze, and comprehend massive codebases without opening a single IDE window.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Feature 1 */}
          <div className="group p-8 rounded-2xl bg-[#161b22] border border-[#30363d] shadow-lg hover:border-[#58a6ff] hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Database size={100} />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#21262d] flex items-center justify-center mb-6 border border-[#30363d] group-hover:bg-[#58a6ff]/10 group-hover:border-[#58a6ff]/50 transition-colors">
              <Database className="w-6 h-6 text-[#58a6ff]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Intelligent Indexing</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed relative z-10">
              Paste your repository URL and let our cluster extract, parse, and embed every function and structure using state-of-the-art vector stores.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-2xl bg-[#161b22] border border-[#30363d] shadow-lg hover:border-[#2ea043] hover:shadow-[0_0_30px_rgba(46,160,67,0.15)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <MessageSquare size={100} />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#21262d] flex items-center justify-center mb-6 border border-[#30363d] group-hover:bg-[#2ea043]/10 group-hover:border-[#2ea043]/50 transition-colors">
              <MessageSquare className="w-6 h-6 text-[#2ea043]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Contextual Chat AI</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed relative z-10">
              Ask natural language questions like "Where is the authentication logic?" and get exact code snippets, file references, and architectural explanations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-2xl bg-[#161b22] border border-[#30363d] shadow-lg hover:border-[#a371f7] hover:shadow-[0_0_30px_rgba(163,113,247,0.15)] transition-all duration-500 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 size={100} />
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#21262d] flex items-center justify-center mb-6 border border-[#30363d] group-hover:bg-[#a371f7]/10 group-hover:border-[#a371f7]/50 transition-colors">
              <Code2 className="w-6 h-6 text-[#a371f7]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Unified Workspace</h3>
            <p className="text-sm text-[#8b949e] leading-relaxed relative z-10">
              Visualize your codebase as an interconnected force-graph. Slide open the integrated editor, file browser, and chat to navigate seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Code / Arch Section */}
      <section className="w-full bg-[#0d1117] py-24 px-6 border-y border-[#30363d] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#58a6ff]/5 to-[#a371f7]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="order-2 lg:order-1 bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl overflow-hidden group">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#0d1117]">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
               </div>
               <span className="ml-4 text-xs font-mono text-[#8b949e]">query_rag.py</span>
            </div>
            <div className="p-6 overflow-x-auto text-[13px] md:text-sm font-mono leading-relaxed text-[#c9d1d9] bg-[#0d1117] custom-scrollbar">
              <span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">pinecone</span><br/>
              <span className="text-[#ff7b72]">from</span> <span className="text-[#c9d1d9]">openai</span> <span className="text-[#ff7b72]">import</span> <span className="text-[#c9d1d9]">OpenAI</span><br/>
              <br/>
              <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">analyze_architecture</span>(<span className="text-[#a5d6ff]">repo_id</span>: <span className="text-[#ff7b72]">str</span>, <span className="text-[#a5d6ff]">question</span>: <span className="text-[#ff7b72]">str</span>):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8b949e]"># 1. Embed user query</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c9d1d9]">vector</span> = <span className="text-[#d2a8ff]">embed_text</span>(question)<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8b949e]"># 2. Retrieve top-k semantic AST nodes</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c9d1d9]">context</span> = <span className="text-[#c9d1d9]">pinecone_index</span>.<span className="text-[#d2a8ff]">query</span>(<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">vector</span>=vector,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">top_k</span>=<span className="text-[#79c0ff]">15</span>,<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">filter</span>={"{"}<span className="text-[#a5d6ff]">"repo_id"</span>: repo_id{"}"}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;)<br/>
              <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#8b949e]"># 3. Stream factual synthesis to client</span><br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> <span className="text-[#c9d1d9]">llm</span>.<span className="text-[#d2a8ff]">generate_stream</span>(context, question)<br/>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Code Search, Evolved.</h2>
            <p className="text-lg text-[#8b949e] leading-relaxed">
              We replace legacy regex and raw text indexing with a high-dimensional vector space. RepoLens understands the <em className="text-white">intent</em> behind the code, instantly leaping across modules and microservices to give you architectural answers.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center text-[#c9d1d9]">
                <div className="w-8 h-8 rounded-full bg-[#1f6feb]/10 text-[#58a6ff] flex items-center justify-center mr-4 border border-[#1f6feb]/30 shrink-0">1</div>
                Generates precise Abstract Syntax Trees.
              </li>
              <li className="flex items-center text-[#c9d1d9]">
                <div className="w-8 h-8 rounded-full bg-[#2ea043]/10 text-[#2ea043] flex items-center justify-center mr-4 border border-[#2ea043]/30 shrink-0">2</div>
                Embeds logic nodes into Pinecone.
              </li>
              <li className="flex items-center text-[#c9d1d9]">
                <div className="w-8 h-8 rounded-full bg-[#a371f7]/10 text-[#a371f7] flex items-center justify-center mr-4 border border-[#a371f7]/30 shrink-0">3</div>
                Synthesizes RAG context via unified Chat.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Extended Details Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          
          <div className="max-w-lg relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Designed for Enterprise Security</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="w-6 h-6 text-[#2ea043] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-[#8b949e] text-base"><strong className="text-[#c9d1d9] font-medium">Zero Retention.</strong> Your codebase is parsed in-memory and embedded securely. Code is never utilized for LLM training.</p>
              </li>
              <li className="flex items-start">
                <Globe className="w-6 h-6 text-[#58a6ff] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-[#8b949e] text-base"><strong className="text-[#c9d1d9] font-medium">Isolated Execution.</strong> Each repository gets an isolated vector space, ensuring zero cross-contamination between projects.</p>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-[#e3b341] mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-[#8b949e] text-base"><strong className="text-[#c9d1d9] font-medium">Real-time Performance.</strong> Powered by optimized Graph structures, reducing UI latency by over 80% compared to typical dashboards.</p>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center relative z-10">
             <div className="relative w-full max-w-sm aspect-square bg-[#010409] border border-[#30363d] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2ea043]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#2ea043] to-[#58a6ff] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 absolute mb-10"></div>
                <Network size={80} className="text-white relative z-10 animate-[spin_20s_linear_infinite]" strokeWidth={1} />
                <div className="mt-8 text-center relative z-10">
                  <p className="font-mono text-xs text-[#58a6ff] mb-1">SYSTEM_STATUS: ONLINE</p>
                  <p className="text-sm text-[#8b949e]">Graph Indexing Operational</p>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}