// Sistema de sonidos para la trivia
class SoundManager {
    constructor() {
        this.audioContext = null;
        this.sounds = {};
        this.initAudioContext();
        this.createSounds();
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Audio no soportado');
        }
    }

    createSounds() {
        // Sonido de respuesta correcta
        this.sounds.correct = this.createTone([523.25, 659.25, 783.99], 0.3, 'sine');
        
        // Sonido de respuesta incorrecta
        this.sounds.incorrect = this.createTone([220, 196, 174.61], 0.5, 'sawtooth');
        
        // Sonido de subir de nivel
        this.sounds.levelUp = this.createMelody([
            {freq: 261.63, duration: 0.2},
            {freq: 329.63, duration: 0.2},
            {freq: 392.00, duration: 0.2},
            {freq: 523.25, duration: 0.4}
        ]);
        
        // Sonido de juego terminado
        this.sounds.gameOver = this.createMelody([
            {freq: 523.25, duration: 0.3},
            {freq: 493.88, duration: 0.3},
            {freq: 440.00, duration: 0.3},
            {freq: 392.00, duration: 0.6}
        ]);

        // Sonido de click
        this.sounds.click = this.createTone([800], 0.1, 'square');

        // Sonido de hover
        this.sounds.hover = this.createTone([1000], 0.05, 'sine');
    }

    createTone(frequencies, duration, waveType = 'sine') {
        return () => {
            if (!this.audioContext) return;
            
            frequencies.forEach((freq, index) => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime);
                oscillator.type = waveType;
                
                gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);
                
                oscillator.start(this.audioContext.currentTime + index * 0.1);
                oscillator.stop(this.audioContext.currentTime + duration + index * 0.1);
            });
        };
    }

    createMelody(notes) {
        return () => {
            if (!this.audioContext) return;
            
            let currentTime = this.audioContext.currentTime;
            
            notes.forEach(note => {
                const oscillator = this.audioContext.createOscillator();
                const gainNode = this.audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(this.audioContext.destination);
                
                oscillator.frequency.setValueAtTime(note.freq, currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0, currentTime);
                gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.001, currentTime + note.duration);
                
                oscillator.start(currentTime);
                oscillator.stop(currentTime + note.duration);
                
                currentTime += note.duration;
            });
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    resume() {
        if (this.audioContext && this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
    }
}

// Crear instancia global del gestor de sonidos
window.soundManager = new SoundManager();