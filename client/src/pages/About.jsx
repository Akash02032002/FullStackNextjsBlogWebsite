export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">

        <div class="flex items-center justify-center h-3/6 py-4">
          <img
            class="object-center rounded-md"
            src="https://res.cloudinary.com/dycpxuxjl/image/upload/v1706231671/Pic3_o7lx8u.png"
            alt="logo"
          />
        </div>

        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About Akash's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Akashverse's Blog! This blog was created by Akash Kumar
              as a personal project to share his thoughts and ideas with the
              world. Akash is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. Akash is always learning and exploring new
              technologies, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
