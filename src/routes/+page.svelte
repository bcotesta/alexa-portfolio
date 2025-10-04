<script lang="ts">
    let rotateX = 0;
    let rotateY = 0;
    let scale = 1;

    function handleMouseMove(e: MouseEvent) {
        const img = e.currentTarget as HTMLElement;
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on mouse position (-15 to 15 degrees)
        rotateY = ((x - centerX) / centerX) * 15;
        rotateX = ((centerY - y) / centerY) * 15;
        scale = 1.05;
    }

    function handleMouseLeave() {
        rotateX = 0;
        rotateY = 0;
        scale = 1;
    }
</script>

<img 
    src="/memes/sadcat.jpg" 
    alt="White and gray cat with teary eyes and a downturned mouth sitting indoors, expressing a sad and forlorn emotion, with a blurred background suggesting a home environment"
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) scale({scale}); transition: transform 0.1s ease-out;"
/>
<footer>
    <p>COPYRIGHT © 2025 <a target="_blank" href="https://bcotesta.xyz">BRANDON COTESTA</a></p>
</footer>

<style>

    footer {
        text-align: center;
        font-size: 10px;
    }

    img {
        height: 60vh;
        width: 75vh;
        display: block;
        margin: 10vh auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    }
    </style>