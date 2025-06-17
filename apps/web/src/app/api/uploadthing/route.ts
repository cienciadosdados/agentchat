import { createRouteHandler } from "uploadthing/next";
 
import { ourFileRouter } from "@/lib/uploadthing/uploadthing";
 
// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    // Optional: Add custom config here
  },
});
