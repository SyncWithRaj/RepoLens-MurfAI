"use client";

import { Mail, MessageCircle, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-grow items-center w-full min-h-screen bg-[#010409] text-[#c9d1d9] selection:bg-[#58a6ff] selection:text-white pt-24 pb-32">
      
      {/* Header Section */}
      <div className="max-w-3xl text-center px-6 mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#a371f7] opacity-10 blur-[80px] rounded-full"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight relative z-10">
          Get in Touch
        </h1>
        <p className="text-[#8b949e] text-lg leading-relaxed relative z-10 font-light">
          Have questions about RepoLens enterprise integration, feature requests, or encountered a bug? We'd love to hear from you. Our engineering team responds within 24 hours.
        </p>
      </div>

      <div className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
        
        {/* Contact info cards */}
        <div className="lg:col-span-2 space-y-6">
           <div className="group bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 shadow-md hover:border-[#58a6ff]/50 transition-all duration-300">
             <div className="flex items-center gap-4 mb-2">
               <div className="bg-[#161b22] border border-[#30363d] p-3 rounded-xl group-hover:bg-[#58a6ff]/10 group-hover:border-[#58a6ff]/50 transition-colors">
                 <Mail className="w-5 h-5 text-[#58a6ff]" />
               </div>
               <h3 className="text-lg font-semibold text-white">Email Us</h3>
             </div>
             <p className="text-[#8b949e] text-sm ml-16">hello@repolens.ai</p>
             <p className="text-[#8b949e] text-sm ml-16">support@repolens.ai</p>
           </div>

           <div className="group bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 shadow-md hover:border-[#2ea043]/50 transition-all duration-300">
             <div className="flex items-center gap-4 mb-2">
               <div className="bg-[#161b22] border border-[#30363d] p-3 rounded-xl group-hover:bg-[#2ea043]/10 group-hover:border-[#2ea043]/50 transition-colors">
                 <MessageCircle className="w-5 h-5 text-[#2ea043]" />
               </div>
               <h3 className="text-lg font-semibold text-white">X / Twitter</h3>
             </div>
             <p className="text-[#8b949e] text-sm ml-16"><a href="#" className="hover:text-[#58a6ff] hover:underline transition-colors">@repolens</a></p>
           </div>

           <div className="group bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 shadow-md hover:border-[#a371f7]/50 transition-all duration-300">
             <div className="flex items-center gap-4 mb-2">
               <div className="bg-[#161b22] border border-[#30363d] p-3 rounded-xl group-hover:bg-[#a371f7]/10 group-hover:border-[#a371f7]/50 transition-colors">
                 <MapPin className="w-5 h-5 text-[#a371f7]" />
               </div>
               <h3 className="text-lg font-semibold text-white">Headquarters</h3>
             </div>
             <p className="text-[#8b949e] text-sm ml-16 leading-relaxed">
               RepoLens Pvt. Ltd. <br/>
               Block V, Innovation Hub <br/>
               San Francisco, CA 94107
             </p>
           </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-3">
          <form className="bg-[#161b22] p-8 md:p-10 rounded-3xl border border-[#30363d] space-y-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] h-full flex flex-col justify-between">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#c9d1d9] ml-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Linus"
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-3.5 text-white placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#c9d1d9] ml-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Torvalds"
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-3.5 text-white placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#c9d1d9] ml-1">Corporate Email Address</label>
                <input 
                  type="email" 
                  placeholder="linus@linux.org"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-3.5 text-white placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all shadow-inner"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#c9d1d9] ml-1">Detailed Message</label>
                <textarea 
                  rows={6}
                  placeholder="How can RepoLens assist your engineering organization?"
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-xl px-4 py-3.5 text-white placeholder-[#484f58] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all resize-y shadow-inner"
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="button"
                className="w-full sm:w-auto px-10 py-4 rounded-xl flex items-center justify-center gap-3 bg-[#238636] hover:bg-[#2ea043] font-semibold text-white transition-all shadow-md hover:shadow-[0_0_15px_rgba(35,134,54,0.4)] group"
                onClick={() => alert("This is a demo UI. Messaging API is currently disabled.")}
              >
                Send Message
                <Send className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
