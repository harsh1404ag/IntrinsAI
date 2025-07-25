import React from 'react';

// --- Social Media Icons (No changes here) ---
const TwitterIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
    </svg>
);

// --- Microsoft for Startups SVG Logo Component ---
const MicrosoftStartupsLogo = ({ className }) => (
    <div className={`flex items-center space-x-2 ${className}`}>
        <svg className="h-5 w-5" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1H9.5V9.5H1V1Z" fill="#F25022"/>
            <path d="M11.5 1H20V9.5H11.5V1Z" fill="#7FBA00"/>
            <path d="M1 11.5H9.5V20H1V11.5Z" fill="#00A4EF"/>
            <path d="M11.5 11.5H20V20H11.5V11.5Z" fill="#FFB900"/>
        </svg>
        <span className="font-semibold text-white">Microsoft for Startups</span>
    </div>
);


// --- Partnership Section Component (No changes here) ---
const PartnershipSection = () => {
    return (
        <section className="bg-black py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="text-center text-lg font-semibold leading-8 text-white">
                        Backed by the world's leading technology innovators
                    </h2>
                    <div className="mx-auto mt-10 grid grid-cols-1 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-3">
                        {/* NVIDIA Inception Logo */}
                        <div className="flex justify-center">
                            <img
                                className="h-10 w-auto"
                                src="/nvidia-inception-logo.png"
                                alt="NVIDIA Inception"
                            />
                        </div>
                        {/* AWS for Startups Logo */}
                        <div className="flex justify-center">
                            <img
                                className="h-10 w-auto"
                                src="/aws-startups-logo.png"
                                alt="AWS for Startups"
                            />
                        </div>
                        {/* Microsoft for Startups Logo */}
                        <div className="flex justify-center">
                             <MicrosoftStartupsLogo className="h-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Main Footer Component ---
const SiteFooter = () => {
    // --- UPDATED CONTENT FOR AURA HEALTH ---
    const linkSections = [
        {
            title: 'Product',
            links: ['Our Technology', 'Trainora App', 'For Researchers'],
        },
        {
            title: 'Company',
            links: ['Our Mission', 'Careers', 'Blog'],
        },
        {
            title: 'Resources',
            links: ['The Science', 'FAQ & Support', 'Digital Biomarkers'],
        },
        {
            title: 'Legal',
            links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
        },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 xl:gap-12">
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <a href="#" className="flex items-center space-x-2">
                            <svg className="h-8 w-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.375a9.375 9.375 0 100-18.75 9.375 9.375 0 000 18.75zm0-8.625a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25zM12 14.625a1.125 1.125 0 110-2.25 1.125 1.125 0 010 2.25z" />
                            </svg>
                            <span className="text-xl font-bold">IntrinsAI</span>
                        </a>
                        <p className="mt-4 text-sm text-neutral-300">
                            Building the future of proactive health.
                        </p>
                    </div>

                    {linkSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold leading-6 text-white">{section.title}</h3>
                            <ul role="list" className="mt-4 space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-neutral-300 hover:text-cyan-400 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm text-neutral-400 order-2 md:order-1 mt-4 md:mt-0">&copy; 2025 IntrinsAI, Inc. All rights reserved.</p>
                    <div className="flex space-x-6 order-1 md:order-2">
                        <a href="#" className="text-neutral-400 hover:text-cyan-400 transition-colors"><span className="sr-only">Twitter</span><TwitterIcon /></a>
                        <a href="#" className="text-neutral-400 hover:text-cyan-400 transition-colors"><span className="sr-only">GitHub</span><GitHubIcon /></a>
                        <a href="#" className="text-neutral-400 hover:text-cyan-400 transition-colors"><span className="sr-only">LinkedIn</span><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


// --- Main App Component (for demonstration) ---
export default function App() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <main className="flex-grow">
                {/* Your main page content goes here */}
            </main>

            {/* Render the sections at the bottom */}
            <PartnershipSection />
            <SiteFooter />
        </div>
    );
}
