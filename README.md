# Dragon Ball App

## Description

This is an app that allows you to search for information about Dragon Ball characters. It is built with Next.js v14, using Server Components, TypeScript, Tailwind CSS and Daisy UI. The data is fetched from the [Dragon Ball API](https://web.dragonball-api.com/).

## Running the project locally

1. Install the dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

## Architecture

The project is built using [Next.js v14 with the app router](https://nextjs.org/). It uses [Tailwind CSS](https://tailwindcss.com/) for styling and [Daisy UI](https://daisyui.com/) for components. It uses [Dragon Ball API](https://web.dragonball-api.com/) to fetch the data. The visual elements are separated from the bussiness logic and app data management.

### Technologies

- [Next.js v14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Dragon Ball API](https://web.dragonball-api.com/)
- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Folder structure

There are two main folders in the project:

- `app`: It contains the code related to the visual elements of the application, like components, pages, and styles. It also contains state and logic that is strongly related to the visual elements, like routing and internal ui components state. The files are [organized by feature/route](https://nextjs.org/docs/app/building-your-application/routing/colocation#split-project-files-by-feature-or-route). This strategy splits specific application code into the route segments that use them. For shared components(or any other shared file like hooks, utils, etc.), the files should be in the closest parent folder that uses them.

- `modules`: It contains the code related to the business logic of the application. The files are organized by module.
  Inside each module folder, the files are organized by layer following the hexagonal architecture. The layers are:
  - `application`: It contains the use cases of the module.
  - `domain`: It contains the entities and the interfaces of the module.
  - `infrastructure`: It contains the implementation of the interfaces of the module.

### Styling

The project uses [Tailwind CSS](https://tailwindcss.com/) for styling. It also uses [Daisy UI](https://daisyui.com/) for components. Daisy UI is a collection of accessible, reusable, and composable React components that are designed to be used with Tailwind CSS.

## Testing

To do.

## Notes

- The API does not respond the ki in number but in string. This string cannot be converted to a number because it contains dots and words.
  A function would be needed to convert the string to a number. Then, it would be possible to use the ki to filter characters.
- There is a problem with the images in the API. It looks that the API's image storage is disabled. Meanwhile, a placeholder image is used.
