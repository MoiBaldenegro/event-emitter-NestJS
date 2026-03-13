export const getDemoTemplate = () => demoTemplate;

export const demoTemplate = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <title>NestJS Event-Emitter Pro</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap');
            body { font-family: 'Space Grotesk', sans-serif; }
            .glass { 
                background: rgba(13, 17, 23, 0.6); 
                backdrop-filter: blur(20px); 
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.08); 
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            }
            .glass-card {
                background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.05);
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
            }
            .gradient-bg { 
                background-color: #0d1117;
                background-image: 
                    radial-gradient(circle at 15% 50%, rgba(224, 35, 78, 0.15), transparent 25%), 
                    radial-gradient(circle at 85% 30%, rgba(79, 70, 229, 0.15), transparent 25%);
            }
            .mesh-gradient::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                background: radial-gradient(circle at 50% 50%, rgba(224,35,78,0.05), transparent 60%);
                z-index: -1;
                animation: pulse-glow 8s infinite alternate;
            }
            @keyframes pulse-glow { 0% { opacity: 0.5; transform: scale(1); } 100% { opacity: 0.8; transform: scale(1.1); } }
            
            .animate-float { animation: float 6s ease-in-out infinite; }
            @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
            
            .custom-scroll::-webkit-scrollbar { width: 6px; }
            .custom-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
            .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
            .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
            
            .spinner { border: 2px solid rgba(255,255,255,0.1); border-radius: 50%; border-top: 2px solid #e0234e; width: 20px; height: 20px; animation: spin 0.8s linear infinite; }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

            .input-group:focus-within label { color: #e0234e; }
            .input-group:focus-within input { border-color: #e0234e; box-shadow: 0 0 0 4px rgba(224, 35, 78, 0.1); }
        </style>
    </head>
    <body class="bg-[#05070a] text-gray-200 min-h-screen lg:h-screen gradient-bg flex flex-col items-center justify-center p-2 selection:bg-[#e0234e] selection:text-white overflow-y-auto lg:overflow-hidden relative">
        <div class="mesh-gradient absolute inset-0 pointer-events-none"></div>
        
        <div class="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center flex-1 relative z-10 py-8 lg:py-0">
            
            <div class="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pl-4">
                <div class="relative w-fit">
                    <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" class="w-16 h-16 lg:w-20 lg:h-20 animate-float drop-shadow-[0_0_35px_rgba(224,35,78,0.4)]">
                </div>

                <div class="space-y-4">
                    <h1 class="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.9] text-white">
                        NestJS <br/> 
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#e0234e] via-[#ff4d7d] to-indigo-400">Events</span>
                    </h1>
                    <p class="text-gray-400 text-lg lg:text-xl max-w-lg leading-relaxed font-light">
                        Arquitectura orientada a eventos con <span class="text-white font-medium border-b border-[#e0234e]/50">EventEmitter2</span>. 
                        Escalabilidad reactiva de próxima generación.
                    </p>
                </div>

                <div class="glass-card p-4 rounded-2xl space-y-2 max-w-md border border-white/10 relative group">
                    <div class="flex justify-between items-center">
                        <p class="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Endpoint Access</p>
                        <span class="flex h-2 w-2 relative">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                    <div class="flex items-center gap-3 bg-[#0a0d12] p-2.5 sm:p-3 rounded-xl border border-white/5 shadow-inner">
                        <span class="text-green-500 font-mono text-[10px] sm:text-xs">GET</span>
                        <code class="text-[10px] sm:text-xs text-indigo-200 font-mono truncate flex-1 leading-none tracking-tight">/account/all</code>
                        <div class="flex items-center gap-1.5">
                            <button onclick="copyURL()" class="p-1.5 sm:p-2 bg-white/5 border border-white/10 hover:bg-[#e0234e]/20 hover:border-[#e0234e]/50 hover:text-white rounded-lg transition-all duration-300 text-gray-400 group" title="Copiar URL">
                                <svg id="copyUrlBtnIcon" class="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                <svg id="checkUrlBtnIcon" class="w-3.5 h-3.5 text-emerald-400 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <a href="/account/all" target="_blank" class="p-1.5 sm:p-2 bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white rounded-lg transition-all duration-300 text-gray-400 group" title="Abrir en nueva pestaña" onclick="event.stopPropagation()">
                                <svg class="w-3.5 h-3.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                    <a href="https://docs.nestjs.com/techniques/events" target="_blank" 
                       class="flex items-center justify-center gap-3 bg-white text-black font-bold py-3.5 px-6 rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.1)] text-xs uppercase tracking-wider w-full sm:w-auto">
                       <span>Read Docs</span>
                       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    <a href="https://github.com/MoiBaldenegro/event-emitter-NestJS" target="_blank" 
                       class="flex items-center justify-center gap-3 glass border border-white/10 font-semibold py-3.5 px-6 rounded-xl hover:bg-white/5 transition-all hover:scale-[1.02] text-gray-300 hover:text-white text-xs uppercase tracking-wider w-full sm:w-auto">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                        Star Repo
                    </a>
                </div>

                <div class="mt-4 flex flex-col gap-3 border-t border-white/5 pt-4">
                    <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        Hecho con <span class="text-[#e0234e] animate-pulse">❤</span> por 
                        <span class="text-gray-300 border-b border-white/10 pb-0.5 hover:text-white transition-colors">Moises Baldenegro</span>
                    </p>
                    
                    <div class="flex gap-3">
                        <!-- GitHub -->
                        <a href="https://github.com/MoiBaldenegro" target="_blank" class="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-[#e0234e]/30 hover:-translate-y-1 transition-all group" title="GitHub">
                            <svg class="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        
                        <!-- LinkedIn -->
                        <a href="https://linkedin.com/in/moibaldenegro" target="_blank" class="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-[#0077b5]/30 hover:-translate-y-1 transition-all group" title="LinkedIn">
                            <svg class="w-4 h-4 text-gray-500 group-hover:text-[#0077b5] transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
                            </svg>
                        </a>

                        <!-- X (Twitter) -->
                        <a href="https://x.com/moibaldenegro" target="_blank" class="p-2 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all group" title="X (Twitter)">
                            <svg class="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 flex flex-col gap-6 lg:gap-4 justify-center pb-8 lg:pb-0">
                
                <div class="glass rounded-3xl p-5 lg:p-6 relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
                    <div class="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                        <svg class="w-24 h-24 lg:w-32 lg:h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>

                    <h2 class="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center gap-3 text-white">
                        <span class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#e0234e] to-orange-500 rounded-xl text-white shadow-lg shadow-[#e0234e]/20">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke-width="2.5" stroke-linecap="round"></path></svg>
                        </span>
                        Nuevo Registro
                    </h2>

                    <div id="globalError" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-bold items-center gap-2 animate-pulse">
                        <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span id="globalErrorText">Error al procesar la solicitud</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6 relative z-10">
                        <div class="space-y-1.5 input-group">
                            <label class="text-[10px] lg:text-[11px] uppercase font-bold text-gray-500 tracking-wider ml-1 transition-colors">Nombre Completo</label>
                            <input id="name" type="text" class="w-full bg-black/20 border border-white/5 p-3 lg:p-3.5 rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all text-sm lg:text-base focus:border-[#e0234e]" placeholder="John Doe">
                            <p id="nameError" class="text-[10px] text-red-400 font-bold hidden pl-1"></p>
                        </div>
                        <div class="space-y-1.5 input-group">
                            <label class="text-[10px] lg:text-[11px] uppercase font-bold text-gray-500 tracking-wider ml-1 transition-colors">Correo Electrónico</label>
                            <input id="email" type="email" class="w-full bg-black/20 border border-white/5 p-3 lg:p-3.5 rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all text-sm lg:text-base focus:border-[#e0234e]" placeholder="john@example.com">
                            <p id="emailError" class="text-[10px] text-red-400 font-bold hidden pl-1"></p>
                        </div>
                        <div class="space-y-1.5 md:col-span-2 input-group">
                            <label class="text-[10px] lg:text-[11px] uppercase font-bold text-gray-500 tracking-wider ml-1 transition-colors">Teléfono</label>
                            <input id="phone" type="tel" class="w-full bg-black/20 border border-white/5 p-3 lg:p-3.5 rounded-xl text-white placeholder:text-gray-600 focus:outline-none transition-all text-sm lg:text-base focus:border-[#e0234e]" placeholder="+1 (555) 000-0000">
                            <p id="phoneError" class="text-[10px] text-red-400 font-bold hidden pl-1"></p>
                        </div>
                    </div>

                    <button id="submitBtn" onclick="handleCreate()" class="group relative w-full overflow-hidden rounded-xl bg-[#e0234e] p-[1px] transition-all hover:bg-gradient-to-r hover:from-[#e0234e] hover:to-[#ff4d7d]">
                        <div class="relative h-full w-full rounded-xl bg-gradient-to-r from-[#e0234e] to-[#c7173e] px-8 py-3 lg:py-3.5 transition-all group-hover:bg-opacity-0">
                            <span id="btnContent" class="relative flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-white">
                                Disparar Evento 
                                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                            </span>
                        </div>
                        <div class="absolute inset-0 -z-10 translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[-100%]"></div>
                    </button>
                </div>

                <div class="glass-card rounded-3xl p-5 flex-1 flex flex-col min-h-[220px] relative">
                     <div class="flex justify-between items-end mb-3 pb-3 border-b border-white/5">
                        <div>
                            <h3 class="font-bold text-white text-sm">Base de Datos en Vivo</h3>
                            <p class="text-[9px] sm:text-[10px] text-gray-500 font-mono mt-1">Listening to: account.created</p>
                        </div>
                        <div class="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-md flex items-center gap-2">
                             <div class="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                             <span class="text-[9px] sm:text-[10px] font-bold text-green-400 uppercase tracking-widest">Online</span>
                        </div>
                    </div>
                    
                    <div id="userList" class="space-y-2 overflow-y-auto custom-scroll flex-1 max-h-[200px] pr-2"></div>
                </div>

                <div class="bg-black/80 rounded-xl p-3 border-l-2 border-[#e0234e] font-mono text-[9px] sm:text-[10px] text-gray-400 shadow-lg">
                    <div id="logs" class="h-14 overflow-y-auto flex flex-col-reverse custom-scroll">
                        <p class="opacity-40 select-none">> Sistema inicializado. Esperando eventos...</p>
                    </div>
                </div>
            </div>
        </div>


        <script>
            const delay = ms => new Promise(res => setTimeout(res, ms));

            async function fetchUsers() {
                try {
                    const res = await fetch('/account/all');
                    const data = await res.json();
                    const container = document.getElementById('userList');
                    container.innerHTML = data.reverse().map(u => \`
                        <div class="bg-white/5 p-4 rounded-2xl border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xs uppercase text-white">
                                    \${u.name ? u.name.charAt(0) : '?'}
                                </div>
                                <div>
                                    <p class="text-sm font-bold text-white mb-0.5">\${u.name}</p>
                                    <p class="text-[10px] text-gray-500">\${u.email} • \${u.phone || 'Sin tel.'}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <span class="text-[9px] text-[#e0234e] font-mono block opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">EVENT_RECEIVED</span>
                                <span class="text-[10px] text-gray-600 font-mono italic">ID: \${u.id ? u.id.substring(0,8) : '...'}</span>
                            </div>
                        </div>
                    \`).join('');
                } catch (e) { console.error("Error fetching", e); }
            }

            async function handleCreate() {
                const btn = document.getElementById('submitBtn');
                const content = document.getElementById('btnContent');
                const originalHTML = content.innerHTML;
                
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const phoneInput = document.getElementById('phone');
                
                const nameError = document.getElementById('nameError');
                const emailError = document.getElementById('emailError');
                const phoneError = document.getElementById('phoneError');

                const globalErrorDiv = document.getElementById('globalError');
                const globalErrorText = document.getElementById('globalErrorText');

                // Reset validations
                if(globalErrorDiv) {
                    globalErrorDiv.classList.add('hidden');
                    globalErrorDiv.classList.remove('flex');
                }
                [nameError, emailError, phoneError].forEach(el => el && el.classList.add('hidden'));
                [nameInput, emailInput, phoneInput].forEach(el => {
                    if(el) {
                        el.classList.remove('border-red-500', 'text-red-300');
                        el.classList.add('border-white/5');
                    }
                });

                if(!nameInput || !emailInput || !phoneInput) {
                    console.error('Error: Inputs not found');
                    return;
                }

                const dto = {
                    id: self.crypto.randomUUID(),
                    name: nameInput.value ? nameInput.value.trim() : '',
                    email: emailInput.value ? emailInput.value.trim() : '',
                    phone: phoneInput.value ? phoneInput.value.trim() : ''
                };

                let isValid = true;
                const showError = (input, errorEl, msg) => {
                    input.classList.remove('border-white/5');
                    input.classList.add('border-red-500', 'text-red-300');
                    if(errorEl) {
                        errorEl.textContent = msg;
                        errorEl.classList.remove('hidden');
                    }
                    isValid = false;
                };

                if(!dto.name) showError(nameInput, nameError, 'El nombre es obligatorio');
                else if(dto.name.length < 3) showError(nameInput, nameError, 'Mínimo 3 caracteres');

                // Validacion de email flexible
                if(!dto.email) showError(emailInput, emailError, 'El correo es obligatorio');
                else {
                    // Usar validador del navegador si disponible, o regex permisivo
                    const isEmailValid = emailInput.checkValidity ? emailInput.checkValidity() : /\S+@\S+\.\S+/.test(dto.email);
                    if(!isEmailValid) showError(emailInput, emailError, 'Formato inválido (ej: usuario@dominio.com)');
                }

                if(!dto.phone) showError(phoneInput, phoneError, 'El teléfono es obligatorio');
                else if(dto.phone.length < 8) showError(phoneInput, phoneError, 'Número inválido (mínimo 8 dígitos)');

                if(!isValid) return;

                btn.disabled = true;
                content.innerHTML = '<div class="spinner"></div> <span class="animate-pulse">Emitiendo...</span>';

                await delay(800);

                try {
                    const res = await fetch('/account/create', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(dto)
                    });

                    if(res.ok) {
                        const log = document.getElementById('logs');
                        log.innerHTML += \`<p class="text-green-400 font-bold tracking-widest uppercase mt-1">> [EVENTO] account_created DISPARADO PARA: \${dto.name}</p>\`;
                        log.scrollTop = log.scrollHeight;
                        nameInput.value = '';
                        emailInput.value = '';
                        phoneInput.value = '';
                        await fetchUsers();
                    } else {
                        const err = await res.json();
                        if(err.message) {
                            if(Array.isArray(err.message)) {
                                // NestJS validation pipe array
                                err.message.forEach(msg => {
                                    const lowerMsg = msg.toLowerCase();
                                    if(lowerMsg.includes('nombre')) showError(nameInput, nameError, msg);
                                    if(lowerMsg.includes('correo') || lowerMsg.includes('email')) showError(emailInput, emailError, msg);
                                    if(lowerMsg.includes('teléfono') || lowerMsg.includes('phone')) showError(phoneInput, phoneError, msg);
                                });
                            } else {
                                // Global error (e.g. Conflict)
                                if(globalErrorDiv && globalErrorText) {
                                    globalErrorText.textContent = err.message;
                                    globalErrorDiv.classList.remove('hidden');
                                    globalErrorDiv.classList.add('flex');
                                }
                                const lowerMsg = err.message.toLowerCase();
                                if(lowerMsg.includes('correo') || lowerMsg.includes('email')) showError(emailInput, emailError, err.message);
                                if(lowerMsg.includes('teléfono') || lowerMsg.includes('phone')) showError(phoneInput, phoneError, err.message);
                            }
                        }
                    }
                } catch (e) {
                    console.error(e);
                } finally {
                    btn.disabled = false;
                    content.innerHTML = originalHTML;
                }
            }

            function copyURL() {
                const url = window.location.origin + '/account/all';
                
                const showSuccess = () => {
                    const copyIcon = document.getElementById('copyUrlBtnIcon');
                    const checkIcon = document.getElementById('checkUrlBtnIcon');
                    
                    if(copyIcon && checkIcon) {
                        copyIcon.classList.add('hidden');
                        checkIcon.classList.remove('hidden');
                        setTimeout(() => {
                            copyIcon.classList.remove('hidden');
                            checkIcon.classList.add('hidden');
                        }, 2000);
                    }
                };

                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(url).then(showSuccess).catch(err => {
                        console.error('Async clipboard failed', err);
                        fallbackCopy(url);
                    });
                } else {
                    fallbackCopy(url);
                }

                function fallbackCopy(text) {
                    const textArea = document.createElement("textarea");
                    textArea.value = text;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-9999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        showSuccess();
                    } catch (err) {
                        console.error('Fallback copy failed', err);
                    }
                    document.body.removeChild(textArea);
                }
            }

            fetchUsers();
            setInterval(fetchUsers, 5000);
        </script>
    </body>
    </html>
`;
