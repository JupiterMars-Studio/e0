document.addEventListener('DOMContentLoaded', function () {
    console.log('Script running on desktop.');

    function shareToFacebook(btn, link) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute(
            'href',
            `https://www.facebook.com/sharer/sharer.php?u=${link}`
        );
    }

    function shareToTwitter(btn, link) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute(
            'href',
            `https://twitter.com/share?url=${link}`
        );
    }

    function shareToLinkedIn(btn, link) {
        btn.setAttribute('target', '_blank');
        btn.setAttribute(
            'href',
            `https://www.linkedin.com/sharing/share-offsite/?url=${link}`
        );
    }

    function socialShare(platform, btn, link) {
        if (platform === 'facebook') {
            shareToFacebook(btn, link);
        } else if (platform === 'twitter') {
            shareToTwitter(btn, link);
        } else if (platform === 'linkedin') {
            shareToLinkedIn(btn, link);
        }
    }

    const link = window.location.href;

    const platforms = ['linkedin', 'twitter', 'facebook'];

    platforms.forEach(platform => {
        const buttons = document.querySelectorAll(`[data-social="${platform}"]`);
        buttons.forEach(btn => {
            socialShare(platform, btn, link);
        });
    });
});
