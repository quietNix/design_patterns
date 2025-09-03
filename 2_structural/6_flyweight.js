// The Flyweight Pattern is a structural design pattern that lets you reuse objects to save 
// memory when you have many similar objects.
// The idea is to share as much data as possible between objects.
// It separates intrinsic state (shared) from extrinsic state (unique per object).


// Flyweight: Shared intrinsic state
class ParticleType {
    constructor(shape, color) {
        this.shape = shape;  // intrinsic
        this.color = color;  // intrinsic
    }

    render(x, y) {         // extrinsic state passed
        console.log(`Rendering ${this.color} ${this.shape} at (${x}, ${y})`);
    }
}

// Flyweight Factory
class ParticleFactory {
    constructor() {
        this.types = {};
    }

    getParticleType(shape, color) {
        const key = `${shape}-${color}`;
        if (!this.types[key]) {
            this.types[key] = new ParticleType(shape, color);
        }
        return this.types[key];
    }
}

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.factory = new ParticleFactory();
    }

    createParticle(x, y, shape, color) {
        const type = this.factory.getParticleType(shape, color);
        this.particles.push({ x, y, type });
    }

    render() {
        for (const particle of this.particles) {
            particle.type.render(particle.x, particle.y);
        }
    }
}

// Usage
const system = new ParticleSystem();

system.createParticle(10, 20, "circle", "red");
system.createParticle(15, 25, "circle", "red"); // reuses same ParticleType
system.createParticle(50, 60, "triangle", "blue");

system.render();
/* Output:
Rendering red circle at (10, 20)
Rendering red circle at (15, 25)
Rendering blue triangle at (50, 60)
*/






// S (SRP): Each class has a single responsibility—ParticleType stores intrinsic state, ParticleSystem manages extrinsic state.

// O (Open/Closed): You can add new particle without modifying existing classes.

// L (Liskov Substitution): Flyweight objects can be used wherever their abstract type is expected without breaking behavior.

// I (Interface Segregation): Clients only use methods they need (render), not irrelevant subsystem methods.

// D (Dependency Inversion): High-level classes ParticleSystem depend on abstract Flyweight types, not concrete implementations.


// You have a large number of similar objects and creating each one separately would waste memory.
// You can split intrinsic (shared) and extrinsic (unique) state.
// You want to reuse objects instead of duplicating data.
// You want to improve performance by minimizing object creation.

// All red sparks share the same shape and color object; only their positions differ.