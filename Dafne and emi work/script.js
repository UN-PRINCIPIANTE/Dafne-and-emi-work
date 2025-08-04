class TriviaGame {
    constructor() {
        this.currentLevel = 1;
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.soundEnabled = true;
        
        this.questions = {
            1: [
                {
                    question: "¿Cuál es el eslogan principal que identifica a Rota Fiesta?",
                    options: ["Siempre en Victoria", "¡Hagamos Fiesta!", "Vamos por Más", "De Fe en Fe"],
                    correct: 1
                },
                {
                    question: "¿Qué frase bíblica fundamenta la visión de Rota Fiesta, según Lucas 15:23?",
                    options: ["Id por todo el mundo", "El pan es para los hijos", "Y traed el becerro gordo y matadlo, y comamos y hagamos fiesta.", "Si tu te mueves, Dios se mueve."],
                    correct: 2
                },
                {
                    question: "¿Cuáles son las 5 'E' de Fiesta?",
                    options: ["Estudiar, Entender, Emprender, Evaluar, Enseñar", "Exaltar, Extender, Evangelizar, Edificar, Enviar", "Escuchar, Explorar, Experimentar, Expresar, Evolucionar", "Empezar, Ejecutar, Entregar, Encontrar, Elevar"],
                    correct: 1
                },
                {
                    question: "¿Cuál es el propósito de Rota Fiesta?",
                    options: ["Multiplicar el número de iglesias.", "Exaltar el nombre de Jesús.", "Construir grandes templos.", "Organizar eventos sociales."],
                    correct: 1
                },
                {
                    question: "¿Cuál es la visión de Rota Fiesta?",
                    options: ["Construir una comunidad fuerte.", "Extender el Reino de Dios y el nombre de Jesucristo.", "Formar líderes espirituales.", "Alcanzar la perfección."],
                    correct: 1
                }
            ],
            2: [
                {
                    question: "¿Cuáles son los dos métodos principales de Rota Fiesta?",
                    options: ["Orar y Ayunar", "Predicar para Salvar y Enseñar para Formar", "Cantar y Alabar", "Leer y Escribir"],
                    correct: 1
                },
                {
                    question: "¿Cuál de estos es uno de los objetivos de Rota Fiesta?",
                    options: ["Crecer en riqueza material.", "Crecer en relación con Dios.", "Crecer en fama.", "Crecer en conocimiento académico."],
                    correct: 1
                },
                {
                    question: "¿Cuál es una de las misiones de Rota Fiesta, según Marcos 16:15?",
                    options: ["Construir escuelas.", "Evangelizar a los perdidos.", "Organizar eventos deportivos.", "Crear música cristiana."],
                    correct: 1
                },
                {
                    question: "¿Cuántas personas componen una 'Casa de Oración'?",
                    options: ["De 4 a 12 personas", "Mínimo 15 almas", "De 2 a 3 personas", "Mínimo 50 almas"],
                    correct: 2
                },
                {
                    question: "¿Cuál es el objetivo principal de una 'Casa de Fiesta'?",
                    options: ["Atender necesidades espirituales de visitas.", "Crecimiento y multiplicación.", "Realizar videollamadas.", "Formar 7 discípulos."],
                    correct: 1
                }
            ],
            3: [
                {
                    question: "¿Cuál es la duración del programa de una 'Casa de Fiesta'?",
                    options: ["30 a 45 minutos", "15 a 20 minutos", "45 minutos a 1 hora", "Más de 1 hora"],
                    correct: 2
                },
                {
                    question: "¿Por qué se implementaron las 'CDF o CDO Virtuales'?",
                    options: ["Para ahorrar dinero.", "A raíz de la pandemia.", "Para llegar a más países.", "Para no salir de casa."],
                    correct: 1
                },
                {
                    question: "¿Cuál es el propósito del 'Discipulado' en Rota Fiesta?",
                    options: ["Organizar eventos.", "Formación de carácter y capacitación para enseñar en las CDF.", "Recaudar fondos.", "Predicar en la calle."],
                    correct: 1
                },
                {
                    question: "¿Cuántos requisitos hay para ser discípulo en Rota Fiesta?",
                    options: ["Dos", "Tres", "Cuatro", "Cinco"],
                    correct: 2
                },
                {
                    question: "¿Cuál es la estrategia de Rota Fiesta para la multiplicación de discípulos?",
                    options: ["Casa de Oración", "Discipulado", "Mi Proyecto 7 (MP7)", "Extensiones"],
                    correct: 2
                }
            ],
            4: [
                {
                    question: "¿Por qué Rota Fiesta usa el término 'Extensiones' y no 'misiones' o 'iglesias hijas'?",
                    options: ["Porque son más grandes.", "Porque permite la movilidad y son parte de UNA sola iglesia.", "Porque son solo virtuales.", "Para no salir de casa."],
                    correct: 1
                },
                {
                    question: "¿Cuál es el número mínimo de almas bautizadas para que una 'Extensión INTERNA' sea autorizada?",
                    options: ["50 almas", "2 a 3 personas", "15 almas", "4 a 12 personas"],
                    correct: 2
                },
                {
                    question: "¿Cuál es el número mínimo de almas bautizadas para que una 'Extensión EXTERNA' sea aprobada?",
                    options: ["15 almas", "50 almas", "100 almas", "No hay mínimo."],
                    correct: 1
                },
                {
                    question: "¿Cuáles son los dos requisitos principales para formar parte del 'Círculo Íntimo'?",
                    options: ["Ser popular y rico.", "Ser fiel e idóneo para enseñar a otros.", "Ser el más antiguo y el más joven.", "Ser el más inteligente y el más fuerte."],
                    correct: 1
                },
                {
                    question: "¿Qué significa ser 'Fiel' en el círculo íntimo, según el documento?",
                    options: ["Asistir a todas las reuniones.", "Ser parte del plan financiero de Dios (Diezmos, ofrendas, etc.).", "No hablar con otras personas.", "Siempre estar de acuerdo con todo."],
                    correct: 1
                }
            ],
            5: [
                {
                    question: "¿Cuál de estas NO es una cualidad de un discípulo del círculo íntimo?",
                    options: ["Leal", "Testigo", "Obediente", "Crítico"],
                    correct: 3
                },
                {
                    question: "¿Qué significa la frase 'El pan es para los hijos' en el contexto de Rota Fiesta?",
                    options: ["Solo los niños pueden comer pan.", "Los recursos espirituales y bendiciones son para los que son parte de la familia de la visión.", "Debemos compartir la comida.", "El pan es un alimento sagrado."],
                    correct: 1
                },
                {
                    question: "¿Cuál de los siguientes NO es un valor de Rota Fiesta (parte del acrónimo FIESTA)?",
                    options: ["Fe", "Iniciativa", "Liderazgo", "Servicio"],
                    correct: 2
                },
                {
                    question: "¿Cuál de los siguientes es un principio de Rota Fiesta?",
                    options: ["Creatividad", "Unción", "Innovación", "Flexibilidad"],
                    correct: 1
                },
                {
                    question: "¿Qué requisito se menciona para los ANFITRIONES que NO están bautizados?",
                    options: ["Deben ser muy inteligentes.", "Deben ser generosos y de buen testimonio.", "Deben haber tomado la Escuela de Discípulos.", "Deben ser supervisores."],
                    correct: 1
                }
            ]
        };

        this.levelThemes = {
            1: { icon: "🌟", name: "Conceptos Básicos", color: "level-1" },
            2: { icon: "🎯", name: "Métodos", color: "level-2" },
            3: { icon: "🌱", name: "Discipulado", color: "level-3" },
            4: { icon: "🏰", name: "Extensiones", color: "level-4" },
            5: { icon: "👑", name: "Valores", color: "level-5" }
        };

        this.initializeGame();
        this.createParticles();
        this.createFloatingElements();
        this.enableSounds();
    }

    initializeGame() {
        document.getElementById('startBtn').addEventListener('click', () => this.startGame());
        document.getElementById('startBtn').addEventListener('touchstart', () => this.startGame());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('nextBtn').addEventListener('touchstart', () => this.nextQuestion());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.resetGame());
        document.getElementById('playAgainBtn').addEventListener('touchstart', () => this.resetGame());
        
        // Agregar efectos de sonido a botones
        this.addSoundEffects();
        
        // Mejorar compatibilidad móvil
        this.setupMobileCompatibility();
    }

    setupMobileCompatibility() {
        // Prevenir zoom en iOS
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'viewport';
            meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.getElementsByTagName('head')[0].appendChild(meta);
        }
        
        // Mejorar rendimiento en móviles
        document.body.style.webkitTransform = 'translateZ(0)';
        document.body.style.transform = 'translateZ(0)';
        
        // Prevenir comportamientos no deseados en móviles
        document.addEventListener('touchstart', function() {}, {passive: true});
        document.addEventListener('touchmove', function(e) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        }, {passive: false});
    }

    addSoundEffects() {
        // Sonidos de hover para botones
        const buttons = document.querySelectorAll('button, .level-card');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                if (this.soundEnabled && window.soundManager) {
                    window.soundManager.play('hover');
                }
            });
            
            button.addEventListener('click', () => {
                if (this.soundEnabled && window.soundManager) {
                    window.soundManager.play('click');
                }
            });
        });
    }

    enableSounds() {
        // Habilitar sonidos después de la primera interacción del usuario
        document.addEventListener('click', () => {
            if (window.soundManager) {
                window.soundManager.resume();
            }
        }, { once: true });
    }

    createFloatingElements() {
        // Crear elementos flotantes adicionales dinámicamente
        const container = document.querySelector('.floating-elements');
        const emojis = ['✨', '🎊', '🎉', '🌟', '💫', '🎈', '🎁', '🌈', '💖', '🦄'];
        
        for (let i = 0; i < 10; i++) {
            const element = document.createElement('div');
            element.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            element.style.position = 'absolute';
            element.style.fontSize = '1.5rem';
            element.style.left = Math.random() * 100 + '%';
            element.style.top = Math.random() * 100 + '%';
            element.style.animation = `floatAround ${15 + Math.random() * 10}s infinite linear`;
            element.style.animationDelay = Math.random() * 15 + 's';
            element.style.opacity = '0.7';
            container.appendChild(element);
        }
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    startGame() {
        this.playSound('levelUp');
        this.showScreen('gameScreen');
        this.currentLevel = 1;
        this.currentQuestion = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.loadQuestion();
        this.updateTheme();
        this.createMagicalEffects();
    }

    updateTheme() {
        const theme = this.levelThemes[this.currentLevel];
        document.body.className = theme.color;
        document.getElementById('currentLevel').textContent = `Nivel ${this.currentLevel}`;
        document.getElementById('levelTheme').textContent = `${theme.icon} ${theme.name}`;
        
        // Efecto de transición de nivel
        this.animateThemeChange();
    }

    animateThemeChange() {
        const gameScreen = document.getElementById('gameScreen');
        gameScreen.style.transform = 'scale(0.95)';
        gameScreen.style.opacity = '0.8';
        
        setTimeout(() => {
            gameScreen.style.transform = 'scale(1)';
            gameScreen.style.opacity = '1';
            gameScreen.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        }, 100);
        
        setTimeout(() => {
            gameScreen.style.transition = '';
        }, 600);
    }

    loadQuestion() {
        const questions = this.questions[this.currentLevel];
        const question = questions[this.currentQuestion];
        
        // Efecto de escritura para la pregunta
        this.typewriterEffect('questionText', question.question);
        
        document.getElementById('questionCounter').textContent = `${this.currentQuestion + 1}/${questions.length}`;
        document.getElementById('score').textContent = `Puntos: ${this.score}`;
        
        const progress = ((this.currentQuestion) / questions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        // Crear opciones con animación escalonada
        setTimeout(() => {
            question.options.forEach((option, index) => {
                setTimeout(() => {
                    const button = document.createElement('button');
                    button.className = 'option-btn';
                    button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
                    button.addEventListener('click', () => this.selectAnswer(index, button));
                    button.addEventListener('touchstart', () => this.selectAnswer(index, button));
                    button.style.opacity = '0';
                    button.style.transform = 'translateY(20px)';
                    optionsContainer.appendChild(button);
                    
                    // Animar entrada
                    setTimeout(() => {
                        button.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                        button.style.opacity = '1';
                        button.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 200);
            });
        }, 1000);
        
        document.getElementById('nextBtn').classList.add('hidden');
    }

    typewriterEffect(elementId, text) {
        const element = document.getElementById(elementId);
        element.textContent = '';
        element.style.borderRight = '2px solid #4ecdc4';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }, 50);
    }

    selectAnswer(selectedIndex, buttonElement) {
        const questions = this.questions[this.currentLevel];
        const question = questions[this.currentQuestion];
        const isCorrect = selectedIndex === question.correct;
        
        // Deshabilitar todos los botones
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => btn.classList.add('disabled'));
        
        // Marcar respuesta correcta e incorrecta
        allButtons.forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Mostrar retroalimentación
        this.showFeedback(isCorrect, question.correct, allButtons);
        
        if (isCorrect) {
            this.score += 100;
            this.correctAnswers++;
            this.playSound('correct');
            this.showCelebration(buttonElement);
            this.createConfetti();
            this.animateScoreIncrease();
        } else {
            this.playSound('incorrect');
            this.shakeScreen();
        }
        
        this.totalQuestions++;
        document.getElementById('score').textContent = `Puntos: ${this.score}`;
        
        setTimeout(() => {
            document.getElementById('nextBtn').classList.remove('hidden');
        }, 1500);
    }

    showFeedback(isCorrect, correctIndex, allButtons) {
        // Crear elemento de retroalimentación
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'feedback-container';
        
        if (isCorrect) {
            feedbackContainer.innerHTML = `
                <div class="feedback correct-feedback">
                    <div class="feedback-icon">🎉</div>
                    <div class="feedback-text">¡Excelente! ¡Respuesta correcta!</div>
                    <div class="feedback-points">+100 puntos</div>
                </div>
            `;
        } else {
            const correctAnswer = allButtons[correctIndex].textContent;
            feedbackContainer.innerHTML = `
                <div class="feedback incorrect-feedback">
                    <div class="feedback-icon">💪</div>
                    <div class="feedback-text">¡Sigue intentando!</div>
                    <div class="feedback-correct">La respuesta correcta era: ${correctAnswer}</div>
                </div>
            `;
        }
        
        // Insertar retroalimentación después del contenedor de opciones
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.parentNode.insertBefore(feedbackContainer, optionsContainer.nextSibling);
        
        // Animar entrada
        setTimeout(() => {
            feedbackContainer.style.opacity = '1';
            feedbackContainer.style.transform = 'translateY(0)';
        }, 100);
        
        // Remover retroalimentación al cargar siguiente pregunta
        setTimeout(() => {
            if (feedbackContainer.parentNode) {
                feedbackContainer.remove();
            }
        }, 3000);
    }
    playSound(soundName) {
        if (this.soundEnabled && window.soundManager) {
            window.soundManager.play(soundName);
        }
    }

    animateScoreIncrease() {
        const scoreElement = document.getElementById('score');
        scoreElement.style.transform = 'scale(1.2)';
        scoreElement.style.color = '#00b894';
        
        setTimeout(() => {
            scoreElement.style.transform = 'scale(1)';
            scoreElement.style.color = '';
            scoreElement.style.transition = 'all 0.3s ease';
        }, 300);
        
        setTimeout(() => {
            scoreElement.style.transition = '';
        }, 600);
    }

    shakeScreen() {
        const gameContainer = document.querySelector('.game-container');
        gameContainer.style.animation = 'screenShake 0.5s ease-in-out';
        
        setTimeout(() => {
            gameContainer.style.animation = '';
        }, 500);
    }

    createMagicalEffects() {
        const effectsContainer = document.getElementById('magicalEffects');
        
        setInterval(() => {
            for (let i = 0; i < 3; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'magic-sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                effectsContainer.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
        }, 1000);
    }

    showCelebration(buttonElement) {
        // Efecto de pulso en el botón correcto
        buttonElement.style.transform = 'scale(1.1)';
        
        // Crear efectos de celebración alrededor del botón
        const rect = buttonElement.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
            sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
            sparkle.style.width = '6px';
            sparkle.style.height = '6px';
            sparkle.style.backgroundColor = '#feca57';
            sparkle.style.borderRadius = '50%';
            sparkle.style.zIndex = '1001';
            sparkle.style.animation = 'sparkleFloat 1.5s ease-out forwards';
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 1500);
        }
    }

    createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#fd79a8'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }
    }

    nextQuestion() {
        this.currentQuestion++;
        const questions = this.questions[this.currentLevel];
        
        if (this.currentQuestion >= questions.length) {
            if (this.currentLevel < 5) {
                this.playSound('levelUp');
                this.currentLevel++;
                this.currentQuestion = 0;
                this.updateTheme();
                this.showLevelUpAnimation();
                setTimeout(() => {
                    this.loadQuestion();
                }, 1000);
            } else {
                this.playSound('gameOver');
                this.showResults();
            }
        } else {
            this.loadQuestion();
        }
    }

    showLevelUpAnimation() {
        // Crear overlay de nivel completado
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'linear-gradient(45deg, rgba(255, 107, 107, 0.9), rgba(78, 205, 196, 0.9))';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '2000';
        overlay.style.opacity = '0';
        overlay.innerHTML = `
            <div style="text-align: center; color: white; font-family: 'Fredoka One', cursive;">
                <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
                <div style="font-size: 2.5rem; margin-bottom: 10px;">¡Nivel ${this.currentLevel - 1} Completado!</div>
                <div style="font-size: 1.5rem;">Avanzando al Nivel ${this.currentLevel}...</div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Animar entrada
        setTimeout(() => {
            overlay.style.transition = 'opacity 0.5s ease';
            overlay.style.opacity = '1';
        }, 50);
        
        // Remover después de mostrar
        setTimeout(() => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 500);
        }, 2000);
    }

    showResults() {
        this.showScreen('resultsScreen');
        this.createFireworks();
        
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        let title, message, titleColor;
        
        if (percentage >= 90) {
            title = "🏆 ¡EXCELENTE! 🏆";
            message = "¡Eres un verdadero experto en Rota Fiesta! Tu conocimiento es impresionante.";
            titleColor = "#00b894";
        } else if (percentage >= 70) {
            title = "🌟 ¡MUY BIEN! 🌟";
            message = "¡Tienes un buen conocimiento sobre Rota Fiesta! Sigue aprendiendo.";
            titleColor = "#fdcb6e";
        } else if (percentage >= 50) {
            title = "👍 ¡BIEN HECHO! 👍";
            message = "Vas por buen camino. Con un poco más de estudio serás un experto.";
            titleColor = "#74b9ff";
        } else {
            title = "💪 ¡SIGUE INTENTANDO! 💪";
            message = "No te desanimes. Cada intento te acerca más al conocimiento completo.";
            titleColor = "#e17055";
        }
        
        document.getElementById('resultsTitle').textContent = title;
        document.getElementById('resultsTitle').style.color = titleColor;
        
        // Animar puntuación final
        this.animateFinalScore(this.score, percentage);
        
        document.getElementById('resultsMessage').textContent = message;
        document.getElementById('correctAnswers').textContent = this.correctAnswers;
        document.getElementById('totalQuestions').textContent = this.totalQuestions;
    }

    animateFinalScore(finalScore, percentage) {
        const scoreElement = document.getElementById('finalScore').querySelector('.score-number') || 
                           document.getElementById('finalScore');
        
        let currentScore = 0;
        const increment = finalScore / 50;
        
        const scoreInterval = setInterval(() => {
            currentScore += increment;
            if (currentScore >= finalScore) {
                currentScore = finalScore;
                clearInterval(scoreInterval);
            }
            
            scoreElement.textContent = `${Math.round(currentScore)} puntos (${percentage}%)`;
        }, 50);
    }

    createFireworks() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#fd79a8'];
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                for (let j = 0; j < 20; j++) {
                    const firework = document.createElement('div');
                    firework.style.position = 'fixed';
                    firework.style.left = Math.random() * 100 + '%';
                    firework.style.top = Math.random() * 100 + '%';
                    firework.style.width = '4px';
                    firework.style.height = '4px';
                    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    firework.style.borderRadius = '50%';
                    firework.style.zIndex = '1500';
                    firework.style.animation = 'fireworkExplode 1s ease-out forwards';
                    document.body.appendChild(firework);
                    
                    setTimeout(() => {
                        firework.remove();
                    }, 1000);
                }
            }, i * 500);
        }
    }

    resetGame() {
        this.showScreen('startScreen');
        document.body.className = '';
        
        // Limpiar efectos
        document.querySelectorAll('.confetti-piece, .magic-sparkle').forEach(el => el.remove());
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        setTimeout(() => {
            document.getElementById(screenId).classList.add('active');
        }, 100);
    }
}

// Agregar estilos adicionales para las nuevas animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes screenShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes fireworkExplode {
        0% { 
            transform: scale(0) rotate(0deg); 
            opacity: 1; 
        }
        100% { 
            transform: scale(4) rotate(360deg); 
            opacity: 0; 
        }
    }
    
    .option-btn {
        position: relative;
        overflow: hidden;
    }
    
    .option-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.6s, height 0.6s;
    }
    
    .option-btn:active::after {
        width: 300px;
        height: 300px;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Inicializar el juego cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new TriviaGame();
});