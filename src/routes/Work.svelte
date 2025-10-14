<script lang="ts">
    let activeTab = 'Info';
    
    const tabs = ['Info', '1st Year', '2nd Year', '3rd Year', 'Personal Work'];
    
    function selectTab(tab: string) {
        activeTab = tab;
    }
</script>

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
        {:else if activeTab === '1st Year'}
            <h2>1st Year</h2>
            <p>First year work...</p>
        {:else if activeTab === '2nd Year'}
            <h2>2nd Year</h2>
            <p>Second year work...</p>
        {:else if activeTab === '3rd Year'}
            <h2>3rd Year</h2>
            <p>Third year work...</p>
        {:else if activeTab === 'Personal Work'}
            <h2>Personal Work</h2>
            <p>Personal projects...</p>
        {/if}
    </div>
</div>

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
</style>