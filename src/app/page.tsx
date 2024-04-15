import { index } from "drizzle-orm/mysql-core";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/20b0a4a3-1953-41a5-bdf3-9310a47b64df-42indm.jpg",
  "https://utfs.io/f/bd51b542-b376-4c08-8010-da89de6ca215-fkhhuz.jpg",
  "https://utfs.io/f/19cef567-1cd8-43bd-ad5d-1246afacf8e9-7u0ash.jpg",
  "https://utfs.io/f/b4c12174-d75b-4a8e-b6a4-fb74d5379260-b8eo15.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image, index) => (
            <div key={image.id + "-" + index} className="w-40">
              <Image src={image.url} alt="image" width={500} height={500} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
