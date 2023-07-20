// import type { StaticImageData } from 'next/dist/shared/lib/image-external'

// declare module '*.png' {
//   const content: StaticImageData

//   export default content
// }

declare module '*.svg' {
  import type React from 'react'

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

  const src: string

  export default src
}

// declare module '*.jpg' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.jpeg' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.gif' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.webp' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.avif' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.ico' {
//   const content: StaticImageData

//   export default content
// }

// declare module '*.bmp' {
//   const content: StaticImageData

//   export default content
// }
