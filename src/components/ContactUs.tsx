import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

interface SubPageProps {
  onBackToHome: () => void;
}

export default function ContactUs({ onBackToHome }: SubPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'feedback',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'err'>('idle');
  const [ticketId, setTicketId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate a secure, fast API submission loop
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `RES-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setSubmitStatus('success');
      
      // Clear data states
      setFormData({
        name: '',
        email: '',
        topic: 'feedback',
        message: ''
      });
    }, 1100);
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 text-left">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs font-mono text-slate-400 dark:text-slate-500 mb-6">
        <button onClick={onBackToHome} className="hover:text-black dark:hover:text-white transition-colors cursor-pointer">HOME</button>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">CONTACT US</span>
      </nav>

      <div className="space-y-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight text-slate-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-sm font-sans text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">
          Have an optimization problem, bug telemetry, advertising proposal, or feature inquiry? Submit your message below and our advocates will respond in 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sidebar Info Section */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 bg-slate-50 dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
              Direct Contact Channels
            </h3>
            
            <div className="flex items-start space-x-3 text-xs">
              <Mail className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Email Support</span>
                <span className="text-slate-500 dark:text-slate-400 block font-mono">support@realimageresizer.com</span>
              </div>
            </div>

            <div className="flex items-start space-x-3 text-xs border-t border-slate-100 dark:border-slate-850 pt-4">
              <MessageSquare className="w-4.5 h-4.5 text-sky-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold text-slate-900 dark:text-white block">Process Assistance</span>
                <span className="text-slate-500 dark:text-slate-400 block">Available 24/7 for offline rendering inquiries or API integration support.</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-150 dark:border-emerald-900/40 rounded-xl flex items-start space-x-3">
            <Sparkles className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-[11px] text-emerald-850 dark:text-emerald-400 font-sans leading-relaxed">
              <strong>Need commercial integration?</strong> Our client-side image resizing algorithms can be packed directly into corporate CRM, ERP, and content modules. Ask us!
            </p>
          </div>
        </div>

        {/* Dynamic Form Work Area */}
        <div className="lg:col-span-8">
          {submitStatus === 'success' ? (
            <div className="p-8 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-250 dark:border-emerald-800 rounded-2xl text-center space-y-5">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Received Successfully!</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your message. We have initialized a physical support ticker and logged it safely under local identification.
                </p>
              </div>

              <div className="inline-block bg-slate-100 dark:bg-[#151c2f] border border-slate-200 dark:border-slate-800 px-4 py-1.5 rounded text-[11px] font-mono text-slate-600 dark:text-slate-300">
                <span>Support Ticket: </span>
                <strong className="text-black dark:text-white font-extrabold">{ticketId}</strong>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs rounded hover:border-slate-500 transition-all cursor-pointer"
                >
                  Submit Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-sm transition-colors duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block text-left">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2.5 text-xs rounded bg-slate-50 dark:bg-[#090b11] border border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white focus:outline-hidden dark:text-white transition-all uppercase tracking-wide placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block text-left">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2.5 text-xs rounded bg-slate-50 dark:bg-[#090b11] border border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white focus:outline-hidden dark:text-white transition-all placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="topic-select" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block text-left">
                  Inquiry Category *
                </label>
                <select
                  id="topic-select"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-xs rounded bg-slate-50 dark:bg-[#090b11] border border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white focus:outline-hidden dark:text-white transition-all cursor-pointer"
                >
                  <option value="feedback">General Feedback & Suggestions</option>
                  <option value="bug">Bug Report / Functional Issue</option>
                  <option value="commercial">Commercial Integration License</option>
                  <option value="ad">Advertising & Sponsorship Placements</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block text-left">
                  Detailed Message *
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help optimize your user workflows?"
                  className="w-full px-3 py-2.5 text-xs rounded bg-slate-50 dark:bg-[#090b11] border border-slate-200 dark:border-slate-800 focus:border-black dark:focus:border-white focus:outline-hidden dark:text-white transition-all resize-y placeholder-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full flex items-center justify-center space-x-2 bg-black dark:bg-white text-white dark:text-black py-3 px-4 rounded text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-xs"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-slate-300 dark:border-slate-600 border-t-white dark:border-t-black animate-spin" />
                    <span>Handling submission...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-start mt-10">
        <button
          onClick={onBackToHome}
          className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black font-semibold text-xs rounded hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm cursor-pointer"
        >
          Back to Resizer Home
        </button>
      </div>
    </article>
  );
}
