# Contributing

Thank you for your interest in contributing to luxe.guhrodrigues.com. We're thrilled to have you on board.

Please take a moment to review this document before submitting your first pull request. It's recommended that you check for any [issues]('https://github.com/guhrodriguess/luxe/issues') and pull requests to see if someone else is working on something similar.

## Index

- About this repository;
- Development;

## About the project

This project was built with ```pnpm``` and includes the following technologies:

- Next Js;
- Tailwind CSS;
- Framer Motion.

It is structured as follows:

```
├── public
|   |   ├── cover.png
|   |   ├── favicon.svg
├── src
|   ├── @types
|   |   |   ├── images.d.ts
|   ├── app
|   |   ├── [slug]
|   |   |   |   ├── layout.tsx
|   |   |   |   ├── page.tsx
|   |   |   ├── layout.tsx
|   |   |   ├── not-found.tsx
|   |   |   ├── page.tsx
|   ├── assets
|   |   |   ├── author.jpg
|   |   |   ├── logo.svg
|   ├── components
|   |   ├── component-page
|   |   |   |   ├── Code.tsx
|   |   |   |   ├── CodeBlock.tsx
|   |   |   |   ├── ComponentsList.tsx
|   |   |   |   ├── ComponentsListButton.tsx
|   |   |   |   ├── ComponentView.tsx
|   |   |   |   ├── CopyCode.tsx
|   |   ├── sections
|   |   |   ├── components
|   |   |   |   |   ├── HeroContent.tsx
|   |   |   |   |   ├── HeroGrid.tsx
|   |   |   |   ├── ComponentsSection.tsx
|   |   |   |   ├── HeroSection.tsx
|   |   ├── ui
|   |   |   ├── badges
|   |   |   |   |   ├── BadgeAnimatedBorder.tsx
|   |   |   |   |   ├── BadgeBackgroundShine.tsx
|   |   |   |   |   ├── BadgeRotateBorder.tsx
|   |   |   |   |   ├── index.ts
|   |   |   ├── buttons
|   |   |   |   |   ├── ButtonAnimatedBorder.tsx
|   |   |   |   |   ├── ButtonBackgroundShine.tsx
|   |   |   |   |   ├── ButtonError.tsx
|   |   |   |   |   ├── ButtonLoading.tsx
|   |   |   |   |   ├── ButtonRotateBorder.tsx
|   |   |   |   |   ├── ButtonSuccess.tsx
|   |   |   |   |   ├── index.ts
|   |   |   ├── dropdown
|   |   |   |   |   ├── DropdownMenu.tsx
|   |   |   |   |   ├── index.ts
|   |   |   ├── tabs
|   |   |   |   |   ├── AnimatedTabs.tsx
|   |   |   |   |   ├── index.ts
|   |   |   ├── texts
|   |   |   |   ├── examples
|   |   |   |   |   |   ├── index.ts
|   |   |   |   |   |   ├── TextAnimatedDecorationExample.tsx
|   |   |   |   |   |   ├── TextGlitchExample.tsx
|   |   |   |   |   |   ├── TextShakeExample.tsx
|   |   |   |   |   ├── index.ts
|   |   |   |   |   ├── TextAnimatedDecoration.tsx
|   |   |   |   |   ├── TextAnimatedGradient.tsx
|   |   |   |   |   ├── TextGlitch.tsx
|   |   |   |   |   ├── TextGradient.tsx
|   |   |   |   |   ├── TextShake.tsx
|   |   |   |   |   ├── TextShine.tsx
|   |   |   |   ├── Footer.tsx
|   ├── data
|   |   |   ├── components.tsx
|   ├── styles
|   |   |   ├── globals.css
|   ├── utils
|   |   |   ├── cn.ts
|   |   |   ├── shiki.ts
|   ├── .eslintrc.json
|   ├── .gitignore
|   ├── LICENSE
|   ├── next.config.mjs
|   ├── package.json
|   ├── pnpm-lock.yaml
|   ├── postcss.config.js
|   ├── README.md
|   ├── tailwind.config.ts
|   ├── tsconfig.json
```
## Development

If you want to contribute, start by forking the repository and then clone it:

```
git clone https://github.com/<your-user-name>/luxe.git
```
Navigate to the directory using:

```
cd luxe
```
And install the dependencies with:

```
pnpm install
```

Open your editor and let's get started!

### 1. If you want to add a new component:

- Go to ```src/components/ui``` if the component  ```type``` already exists, open one of the folders in ```src/components/ui``` and add your component there.

- Then, go to ```index.ts``` in the same directory and import your component:

```ts
export * from "./MyNewComponent";
```

- Now, go to ```src/data/components.tsx``` and import your component and fill out the object:

```tsx
{
    name: "My New Component",
    slug: "my-new-component",
    component: <MyNewComponent />,
    type: "new",
},
``` 

> ⚠ : Pay close attention to naming your components. Notice that in the name I have ``` My New Component```  and my component is ```<MyNewComponent />```. So, take that into account!

- That's it! Now just make sure your new component was added successfully. ✨

If you want to add a new ```tipo``` of component, just go to  ```src/components/ui``` and create a new folder and an ```index.ts``` file and follow the same process described above.

---

