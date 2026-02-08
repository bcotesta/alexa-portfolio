<script lang="ts">
    import Work from "./Work.svelte";

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
<div class="page-container">
    <section class="page landing-section">
        <h1>Alexa Cotesta</h1>
        <!-- <h3>Portfolio</h3> -->
        <h3><a href="PDF/AlexaCotesta_ArchPotrfolio2026.pdf" target="_blank">Portfolio</a> | <a href="PDF/Resume_AlexaCotesta2026.pdf" target="_blank">Resume</a></h3>

        <footer>
            <p>COPYRIGHT © 2025 ALEXA COTESTA - SITE BY <a target="_blank" href="https://bcotesta.xyz">BRANDON COTESTA</a></p>
        </footer>
    </section>
    
    <!-- IMPLEMENT THIS AGAIN LATER!!!!!!!!!!!!!!!!!! -->
    <!-- <section class="page work-section">
        <Work />
        <footer>
            <p>COPYRIGHT © 2025 ALEXA COTESTA - SITE BY <a target="_blank" href="https://bcotesta.xyz">BRANDON COTESTA</a></p>
        </footer>
    </section> -->
</div>

<!-- <img 
    src="/memes/sadcat.jpg" 
    alt="White and gray cat with teary eyes and a downturned mouth sitting indoors, expressing a sad and forlorn emotion, with a blurred background suggesting a home environment"
    on:mousemove={handleMouseMove}
    on:mouseleave={handleMouseLeave}
    style="transform: perspective(1000px) rotateX({rotateX}deg) rotateY({rotateY}deg) scale({scale}); transition: transform 0.1s ease-out;"
/> -->

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    .page-container {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        height: 100vh;
    }

    .page {
        scroll-snap-align: start;
        scroll-snap-stop: always;
        height: 100vh;
        width: 100%;
    }

    .landing-section {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .landing-section a {
        color: inherit;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.3s ease;
    }
    
    .landing-section a:hover {
        border-color: currentColor;
    }

    .landing-section footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-top: 0;
    }

    .work-section {
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    footer {
        font-family: 'Arimo', sans-serif;
        font-weight: 600;
        letter-spacing: -.5px;
        text-align: center;
        font-size: max(10px, 1.25vh);    
        padding: 2rem 0;
        background: transparent;
        margin-top: auto;
    }

    footer a{
        color: inherit;
    }

    .landing-section h1  {
        font-family: 'Noto Serif', serif;
        font-weight: 400;
        text-align: center;
        font-size: max(30px, 6vh);
        margin: 0;
    }
    .landing-section h3 {
        font-family: 'Noto Serif', serif;
        font-weight: 400;
        text-align: center;
        font-size: max(px, 3vh);
        margin-top: 1rem;
    }

    /* img { for sadcat
        height: 60vh;
        width: 75vh;
        display: block;
        margin: 10vh auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        cursor: pointer;
    } */
    </style>