import "./About.css";

export default function About() {
  return (
    <main>
      <img
        alt="Photo of me petting a bunny in Kraków, Poland"
        className="hero"
        src="/bunny.webp"
      />
      <h1>
        I'm Michael Oliver, a software engineer passionate about science,
        computing, and making a difference in the world.
      </h1>
      <p>
        I've been at Kojo for 5+ years where I've been making construction
        materials management faster, easier, and more sustainable by empowering
        our engineering teams. I focus primarily on our infrastucture, CI/CD
        pipelines, and developer experience, though I've been known to jump into
        frontend work, training AI models, security, or whatever else needs to
        be done.
      </p>
      <p>
        When I'm not coding, I'm either traveling the world, hiking, skiing, or
        gaming. I'm a huge fan of science fiction and fantasy, so count me in
        for tabletop RPGs, board games, or a good book.
      </p>
      <p>
        I grew up in eastern Canada, but moved to San Francisco, California in
        2017 where I'm now a permanent resident. I've been lucky enough to
        travel to 31 countries and counting, which includes a 4 month
        backpacking trip across Japan and a stop in every continent. I have lots
        of stories to tell, but even more to listen to!
      </p>
    </main>
  );
}
