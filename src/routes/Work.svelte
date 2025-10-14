<script lang="ts">
    let activeTab = 'Info';
    let selectedProject: any = null;
    let currentCarouselIndex = 0;
    
    const tabs = ['Info', '1st Year', '2nd Year', '3rd Year', 'Personal Work'] as const;
    type TabType = typeof tabs[number];
    
    interface Project {
        id: number;
        title: string;
        description: string;
        year: string;
        category: string;
        carouselImages: string[];
        galleryImages: string[];
    }
    
    const projects: Record<string, Project[]> = {
        '1st Year': [
            { 
                id: 1, 
                title: 'Project Alpha', 
                description: 'A design exploration...', 
                year: '2022', 
                category: 'Graphic Design',
                carouselImages: [
                    'Alpha Featured 1',
                    'Alpha Featured 2',
                    'Alpha Featured 3'
                ],
                galleryImages: [
                    'Alpha Gallery 1',
                    'Alpha Gallery 2',
                    'Alpha Gallery 3',
                    'Alpha Gallery 4',
                    'Alpha Gallery 5',
                    'Alpha Gallery 6'
                ]
            },
            { 
                id: 2, 
                title: 'Project Beta', 
                description: 'Typography study...', 
                year: '2022', 
                category: 'Typography',
                carouselImages: [
                    'Beta Featured 1',
                    'Beta Featured 2',
                    'Beta Featured 3',
                    'Beta Featured 4'
                ],
                galleryImages: [
                    'Beta Gallery 1',
                    'Beta Gallery 2',
                    'Beta Gallery 3',
                    'Beta Gallery 4'
                ]
            },
            { 
                id: 3, 
                title: 'Project Gamma', 
                description: 'Brand identity...', 
                year: '2022', 
                category: 'Branding',
                carouselImages: [
                    'Gamma Featured 1',
                    'Gamma Featured 2'
                ],
                galleryImages: [
                    'Gamma Gallery 1',
                    'Gamma Gallery 2',
                    'Gamma Gallery 3',
                    'Gamma Gallery 4',
                    'Gamma Gallery 5'
                ]
            },
        ],
        // Fill dese in later brahhahhhh
        '2nd Year': [],
        '3rd Year': [],
        'Personal Work': []
    };
    
    function selectTab(tab: string) {
        activeTab = tab;
    }
    
    function openProject(project: any) {
        selectedProject = project;
        currentCarouselIndex = 0; // Reset carousel when opening project
    }
    
    function closeProject() {
        selectedProject = null;
        currentCarouselIndex = 0;
    }
    
    function nextImage() {
        if (selectedProject && selectedProject.carouselImages) {
            currentCarouselIndex = (currentCarouselIndex + 1) % selectedProject.carouselImages.length;
        }
    }
    
    function prevImage() {
        if (selectedProject && selectedProject.carouselImages) {
            currentCarouselIndex = (currentCarouselIndex - 1 + selectedProject.carouselImages.length) % selectedProject.carouselImages.length;
        }
    }
    
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && selectedProject) {
            closeProject();
        } else if (selectedProject) {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="work-container">
    <nav class="tab-selector">
        <ul>
            {#each tabs as tab}
                <li>
                    <button 
                        class:active={activeTab === tab}
                        on:click={() => selectTab(tab)}
                    >
                        {tab}
                    </button>
                </li>
            {/each}
        </ul>
    </nav>
    
    <div class="content">
        {#if activeTab === 'Info'}
            <h2>Info</h2>
            <h3>About</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lectus nisi. Nullam eu metus luctus, blandit arcu in, fringilla ipsum. 
                Pellentesque in egestas est. In porttitor quam non vehicula laoreet. Phasellus at vestibulum lectus. Pellentesque egestas dignissim lectus. 
                Quisque quis ornare neque. Etiam et massa ultricies, molestie dolor nec, commodo justo. Pellentesque habitant morbi tristique senectus et netus et 
                malesuada fames ac turpis egestas.
                Donec lectus dui, vulputate ut diam vitae, euismod ornare mi. Curabitur vitae ligula efficitur odio tristique tincidunt vel sed mi. Sed porta mollis 
                sapien, id porttitor diam iaculis eu. Etiam pharetra luctus condimentum. In hac habitasse platea dictumst. Praesent aliquam porttitor est, nec pharetra 
                quam faucibus sed. Cras eget malesuada massa, nec ullamcorper lacus. Vivamus in fringilla nunc, tristique volutpat nisl. Praesent efficitur, est eget 
                pharetra feugiat, nisl sem sollicitudin lectus, sed volutpat diam erat quis erat. Duis id tincidunt ex. Pellentesque pharetra neque ac quam bibendum congue. 
                Aliquam quis ornare diam. 
            </p>
            <h3>Skills</h3>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                <li>Skill 4</li>
                <li>Skill 5</li>
            </ul>
            <h3>Awards</h3>
            <ul>
                <li>Award 1</li>
                <li>Award 2</li>
                <li>Award 3</li>
                <li>Award 4</li>
                <li>Award 5</li>
            </ul>
        {:else}
            <h2>{activeTab}</h2>
            <div class="project-grid">
                {#each projects[activeTab] || [] as project}
                    <button class="project-card" on:click={() => openProject(project)}>
                        <div class="project-thumbnail">
                            <span class="project-number">{project.id}</span>
                        </div>
                        <h3>{project.title}</h3>
                        <p class="project-category">{project.category}</p>
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</div>

<!-- Project Modal -->
{#if selectedProject}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="modal-overlay" on:click={closeProject} role="button" tabindex="0">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="modal-content" on:click|stopPropagation role="dialog" aria-modal="true" tabindex="-1">
            <button class="close-btn" on:click={closeProject}>×</button>
            <div class="modal-inner">
                <!-- Title Section -->
                <div class="modal-header">
                    <h1>{selectedProject.title}</h1>
                    <div class="project-meta">
                        <span class="meta-item">{selectedProject.year}</span>
                        <span class="meta-item">{selectedProject.category}</span>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="modal-main">
                    <div class="carousel-section">
                        <div class="carousel">
                            <div class="carousel-image">{selectedProject.carouselImages[currentCarouselIndex]}</div>
                            <button class="carousel-btn prev" on:click|stopPropagation={prevImage} aria-label="Previous image">‹</button>
                            <button class="carousel-btn next" on:click|stopPropagation={nextImage} aria-label="Next image">›</button>
                            <div class="carousel-indicators">
                                {#each selectedProject.carouselImages as _, index}
                                    <button 
                                        class="indicator" 
                                        class:active={currentCarouselIndex === index}
                                        on:click|stopPropagation={() => currentCarouselIndex = index}
                                        aria-label="Go to image {index + 1}"
                                    ></button>
                                {/each}
                            </div>
                        </div>
                    </div>
                    
                    <div class="description-section">
                        <h2>Description</h2>
                        <p>{selectedProject.description}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                
                <!-- Image Gallery Below -->
                <div class="gallery-section">
                    <h2>Gallery</h2>
                    <div class="image-gallery">
                        {#each selectedProject.galleryImages as img, index}
                            <button class="gallery-item" on:click|stopPropagation aria-label="View gallery image {index + 1}">
                                <div class="gallery-image">{img}</div>
                            </button>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .work-container {
        display: flex;
        padding: 2rem;
        gap: 2rem;
        flex: 1;
    }
    
    .tab-selector {
        position: sticky;
        top: 2rem;
        height: fit-content;
    }
    
    .tab-selector ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .tab-selector li {
        padding: 0;
    }
    
    .tab-selector button {
        font-family: 'Arimo', serif;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0.75rem 1.5rem;
        border: none;
        border-left: 3px solid transparent;
        background: none;
        text-align: left;
        width: 100%;
        transition: all 0.3s ease;
        color: #666;
    }
    
    .tab-selector button:hover {
        color: #000;
        border-left-color: #999;
    }
    
    .tab-selector button.active {
        color: #000;
        border-left-color: #000;
        font-weight: 600;
    }
    
    .content {
        font-family: 'Arimo', serif;
        flex: 1;
        padding: 2rem;
    }
    
    .content h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .content h3 {
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: -1rem;
        text-decoration: underline;
    }
    
    .content ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        margin-top: 1.25rem;
        font-size: 1.15rem;
    }
    
    .content p {
        font-size: 1.1rem;
        line-height: 1.6;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
        .work-container {
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
        }
        
        .tab-selector {
            position: static;
            width: 100%;
        }
        
        .tab-selector ul {
            flex-direction: row;
            gap: 0.5rem;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
        }
        
        .tab-selector button {
            font-size: 1rem;
            padding: 0.5rem 1rem;
            border-left: none;
            border-bottom: 3px solid transparent;
            white-space: nowrap;
        }
        
        .tab-selector button:hover {
            border-left-color: transparent;
            border-bottom-color: #999;
        }
        
        .tab-selector button.active {
            border-left-color: transparent;
            border-bottom-color: #000;
        }
        
        .content {
            padding: 1rem;
        }
        
        .content h2 {
            font-size: 1.8rem;
        }
        
        .content p {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .work-container {
            padding: 0.5rem;
        }
        
        .tab-selector button {
            font-size: 0.9rem;
            padding: 0.5rem 0.75rem;
        }
        
        .content {
            padding: 0.5rem;
        }
        
        .content h2 {
            font-size: 1.5rem;
        }
        
        .content p {
            font-size: 0.95rem;
        }
    }

    /* Project Grid */
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
    }

    .project-card {
        background: white;
        border: 1px solid #ddd;
        padding: 0;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
        font-family: inherit;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .project-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .project-thumbnail {
        width: 100%;
        height: 200px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .project-number {
        font-family: 'Arimo', sans-serif;
        font-size: 3rem;
        color: white;
        font-weight: 600;
    }

    .project-card h3 {
        font-family: 'Arimo', sans-serif;
        font-size: 1.4rem;
        margin: 1rem 1.5rem 0.5rem;
        font-weight: 600;
    }

    .project-category {
        font-family: 'Arimo', sans-serif;
        font-size: 0.9rem;
        color: #666;
        margin: 0 1.5rem 1.5rem;
    }

    /* Modal Styles */
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 2rem;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal-content {
        background: #C4C4C4;
        width: 100%;
        max-width: 1200px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        animation: slideUp 0.3s ease;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    }

    @keyframes slideUp {
        from {
            transform: translateY(50px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 3rem;
        line-height: 1;
        cursor: pointer;
        color: #333;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .close-btn:hover {
        color: #000;
    }

    .modal-inner {
        padding: 3rem;
    }

    /* Modal Header */
    .modal-header {
        margin-bottom: 3rem;
        border-bottom: 2px solid #999;
        padding-bottom: 1.5rem;
    }

    .modal-header h1 {
        font-family: 'Noto Serif', serif;
        font-size: 3rem;
        margin-bottom: 0.5rem;
        font-weight: 400;
    }

    .project-meta {
        display: flex;
        gap: 2rem;
        font-family: 'Arimo', sans-serif;
    }

    .meta-item {
        color: #666;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    /* Main Content Section - Carousel Left, Description Right */
    .modal-main {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    .description-section h2 {
        font-family: 'Noto Serif', serif;
        font-size: 1.8rem;
        margin-bottom: 1rem;
        font-weight: 400;
    }

    .description-section p {
        font-family: 'Arimo', sans-serif;
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1rem;
        color: #333;
    }

    .carousel-section {
        position: sticky;
        top: 2rem;
        height: fit-content;
    }

    .carousel {
        width: 100%;
        position: relative;
    }

    .carousel-image {
        width: 100%;
        height: 500px;
        background: #666;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: 'Arimo', sans-serif;
        font-size: 1.5rem;
    }

    .carousel-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.9);
        border: none;
        font-size: 3rem;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s ease;
        color: #333;
        font-weight: 300;
        line-height: 1;
    }

    .carousel-btn:hover {
        background: rgba(255, 255, 255, 1);
    }

    .carousel-btn.prev {
        left: 1rem;
    }

    .carousel-btn.next {
        right: 1rem;
    }

    .carousel-indicators {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 0.5rem;
    }

    .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid white;
        background: transparent;
        cursor: pointer;
        padding: 0;
        transition: background 0.2s ease;
    }

    .indicator:hover {
        background: rgba(255, 255, 255, 0.5);
    }

    .indicator.active {
        background: white;
    }

    /* Gallery Section */
    .gallery-section {
        margin-top: 2rem;
    }

    .gallery-section h2 {
        font-family: 'Noto Serif', serif;
        font-size: 2rem;
        margin-bottom: 2rem;
        font-weight: 400;
    }

    .image-gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .gallery-item {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .gallery-item:hover {
        transform: scale(1.05);
    }

    .gallery-image {
        width: 100%;
        height: 250px;
        background: #888;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-family: 'Arimo', sans-serif;
    }

    @media (max-width: 768px) {
        .project-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .modal-overlay {
            padding: 0;
        }

        .modal-content {
            max-height: 100vh;
            border-radius: 0;
        }

        .modal-inner {
            padding: 2rem 1rem;
        }

        .modal-header h1 {
            font-size: 2rem;
        }

        .modal-main {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .carousel-section {
            position: static;
        }

        .carousel-image {
            height: 300px;
        }

        .image-gallery {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 1rem;
        }

        .gallery-image {
            height: 150px;
        }
    }
</style>