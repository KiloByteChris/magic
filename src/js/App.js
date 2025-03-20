import Test from "./test.js";

class App {
	constructor() {
		this.instances = {
			components: {
                test: null
				// accordion: [],
			},
			templates: {
				// resourceTemplate: null,
			},
			blocks: {
				// accordionImage: [],
			}
		};

		this.init();
		this.initComponents();
		this.initTemplates();
		this.initBlocks();
	}

	init() {
		// this.scrollWatcher = new ScrollWatcher((params) => {
		// 	ScrollWatcher.defaultCallback(params, 100);
		// });
	}

	async initComponents() {
		// site header
		// const siteHeaderEl = document.querySelector('.site-header');

		// if (siteHeaderEl) {
		// 	this.instances.components.siteHeader = new SiteHeader(siteHeaderEl);
		// 	this.instances.components.menuLocation = new MenuLocationInfo(siteHeaderEl);
		// }
        const testElement = document.body;
        if(testElement) {
            this.instances.components.test = new Test(testElement);
        }
	}

	initTemplates() {
		// const resourceTemplateEl = document.querySelector('.post-type-archive-resource');

		// if (resourceTemplateEl) {
		// 	this.instances.templates.resourceTemplate = new ResourceTemplate(resourceTemplateEl);
		// }
	}

	async initBlocks() {
		// Accordion Image
		// Array.from(document.querySelectorAll('.block-accordion')).forEach((accordionImage) => {
		// 	this.instances.blocks.accordionImage.push(new AccordionImage(accordionImage));
		// });
	}
}

export default App;