@@ .. @@
     initializeGame() {
-        document.getElementById('startBtn').addEventListener('click', () => this.startGame());
-        document.getElementById('startBtn').addEventListener('touchstart', () => this.startGame());
-        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
-        document.getElementById('nextBtn').addEventListener('touchstart', () => this.nextQuestion());
-        document.getElementById('playAgainBtn').addEventListener('click', () => this.resetGame());
-        document.getElementById('playAgainBtn').addEventListener('touchstart', () => this.resetGame());
+        // Usar eventos táctiles mejorados para móviles
+        this.addButtonListener('startBtn', () => this.startGame());
+        this.addButtonListener('nextBtn', () => this.nextQuestion());
+        this.addButtonListener('playAgainBtn', () => this.resetGame());
         
         // Agregar efectos de sonido a botones
         this.addSoundEffects();
@@ .. @@
         this.setupMobileCompatibility();
     }

+    addButtonListener(buttonId, callback) {
+        const button = document.getElementById(buttonId);
+        if (!button) return;
+        
+        let touchStarted = false;
+        
+        // Evento táctil
+        button.addEventListener('touchstart', (e) => {
+            e.preventDefault();
+            touchStarted = true;
+            button.style.transform = 'scale(0.95)';
+        }, { passive: false });
+        
+        button.addEventListener('touchend', (e) => {
+            e.preventDefault();
+            if (touchStarted) {
+                button.style.transform = '';
+                callback();
+                touchStarted = false;
+            }
+        }, { passive: false });
+        
+        button.addEventListener('touchcancel', () => {
+            touchStarted = false;
+            button.style.transform = '';
+        });
+        
+        // Evento de click para desktop
+        button.addEventListener('click', (e) => {
+            if (!touchStarted) {
+                callback();
+            }
+        });
+    }
+
     setupMobileCompatibility() {
@@ .. @@
         // Prevenir comportamientos no deseados en móviles
-        document.addEventListener('touchstart', function() {}, {passive: true});
+        document.addEventListener('touchstart', function() {}, { passive: true });
         document.addEventListener('touchmove', function(e) {
-            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
+            // Permitir scroll solo en el contenido del juego
+            if (!e.target.closest('.question-container') && 
+                !e.target.closest('.results-content') && 
+                !e.target.closest('.start-content')) {
                 e.preventDefault();
             }
-        }, {passive: false});
+        }, { passive: false });
+        
+        // Prevenir zoom con doble tap
+        let lastTouchEnd = 0;
+        document.addEventListener('touchend', function(e) {
+            const now = (new Date()).getTime();
+            if (now - lastTouchEnd <= 300) {
+                e.preventDefault();
+            }
+            lastTouchEnd = now;
+        }, false);
     }
@@ .. @@
                     button.className = 'option-btn';
                     button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
-                    button.addEventListener('click', () => this.selectAnswer(index, button));
-                    button.addEventListener('touchstart', () => this.selectAnswer(index, button));
+                    
+                    // Agregar eventos táctiles mejorados para opciones
+                    this.addOptionListener(button, index);
+                    
                     button.style.opacity = '0';
                     button.style.transform = 'translateY(20px)';
                     optionsContainer.appendChild(button);
@@ .. @@
         document.getElementById('nextBtn').classList.add('hidden');
     }

+    addOptionListener(button, index) {
+        let touchStarted = false;
+        
+        button.addEventListener('touchstart', (e) => {
+            e.preventDefault();
+            touchStarted = true;
+            if (!button.classList.contains('disabled')) {
+                button.style.transform = 'scale(0.98) translateY(-2px)';
+            }
+        }, { passive: false });
+        
+        button.addEventListener('touchend', (e) => {
+            e.preventDefault();
+            if (touchStarted && !button.classList.contains('disabled')) {
+                button.style.transform = '';
+                this.selectAnswer(index, button);
+                touchStarted = false;
+            }
+        }, { passive: false });
+        
+        button.addEventListener('touchcancel', () => {
+            touchStarted = false;
+            button.style.transform = '';
+        });
+        
+        button.addEventListener('click', (e) => {
+            if (!touchStarted && !button.classList.contains('disabled')) {
+                this.selectAnswer(index, button);
+            }
+        });
+    }
+
     typewriterEffect(elementId, text) {
@@ .. @@