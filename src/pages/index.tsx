import { Button, Tooltip } from "demandscience-ui";

export default function Home() {
  return (
    <>
      <main className="container min-h-screen grid pt-48 md:pt-0 md:place-items-center">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold mb-20">
            TailwindCSS, Next.js & DemandScienceUI Template
          </h1>
          <Tooltip title="This is a useless button">
            <Button>Hello World</Button>
          </Tooltip>
        </div>
      </main>
    </>
  );
}
