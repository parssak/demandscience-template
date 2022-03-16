import { Button, Tooltip } from "demandscience-ui";

export default function Home() {
  return (
    <>
      <main className="container min-h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-20">
            TailwindCSS, Next.js & DemandScienceUI Template
          </h1>
          <Tooltip title="This is a useless button" className="w-max">
            <Button>Hello World</Button>
          </Tooltip>
        </div>
      </main>
    </>
  );
}
