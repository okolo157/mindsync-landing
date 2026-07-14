import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    type?: string;
    canonicalUrl?: string;
    image?: string;
}

export const SEO = ({
    title = 'MindSync Solutions | AI-First Education Platform',
    description = 'MindSync Solutions is an AI-first ecosystem for modern education — AI course creation, AI tutoring, and intelligent SIMS, LMS, and more.',
    type = 'website',
    canonicalUrl,
    image = 'https://mindsync.solutions/og-image.jpg',
}: SEOProps) => {
    const url = canonicalUrl || 'https://mindsync.solutions';

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={url} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="MindSync Solutions" />
            <meta property="og:locale" content="en_AU" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content="MindSync Solutions" />
        </Helmet>
    );
};
