import React from "react";

const Footer = () => {
  return (
    <div class="layout-footer mx-8 my-12">
      <footer class="flex flex-col md:flex-row gap-6 justify-between">
        <span>Replicate</span>
        <div class="flex flex-wrap gap-3">
          <a className="foot-links" href="/">Home</a>
          <a className="foot-links" href="/about">About</a>
          <a className="foot-links" href="/docs">Docs</a>
          <a className="foot-links" href="/terms">Terms</a>
          <a className="foot-links" href="/privacy">Privacy</a>
          <a className="foot-links" href="https://replicatestatus.com/">Status</a>
          <a className="foot-links" href="https://github.com/replicate">GitHub</a>
          <a className="foot-links" href="https://twitter.com/replicatehq">Twitter</a>
          <a className="foot-links" href="https://discord.gg/replicate">Discord</a>
          <a className="foot-links" href="mailto:team@replicate.com">Email</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;