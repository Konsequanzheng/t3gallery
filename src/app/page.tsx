import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="flex w-40 flex-col">
            {image.url ? (
              <Image src={image.url} alt="image" width={500} height={500} />
            ) : null}
            {image.name}
          </div>
        ))}
      </div>
    </main>
  );
}
