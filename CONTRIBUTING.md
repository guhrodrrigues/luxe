# Contributing

Obrigado pelo seu interesse em contribuir para o luxe.guhrodrigues.com. Estamos muito felizes em tê-lo aqui.

Por favor, reserve um momento para revisar este documento antes de enviar sua primeira solicitação pull. É recomendável que você verifique se há [problemas]('https://github.com/guhrodriguess/luxe/issues') em aberto e solicitações pull para ver se outra pessoa está trabalhando em algo semelhante.


### 1. Caso queira adicionar um componente novo

- Entre em ```src/components/ui``` caso o ```tipo``` de compopnente já exista, abra uma das pastas em ```ui``` e adicione o seu componente.

- Em seguida entre em ```index.ts``` no mesmo diretório e importe o seu componente

```tsx
export * from "./MyNewComponent";
```

- Agora, entre em ```src/data/components.tsx``` e faça a importação do seu componente e preencha o objecto

```tsx
{
    name: "My New Component",
    slug: "my-new-component",
    component: <MyNewComponent />,
    type: "new",
},
```

> ⚠ : Tenha bastante atenção ao nomear os seus compoenentes. Repare que em nome eu tenho ```My New Component``` e o meu componente é ```<MyNewComponent />```. Então, leve isso em conta!

- Já está! Agora é só certificar-se de que o seu novo componente foi adiconado com sucesso. ✨

Caso queria adiconer um novo ```tipo```, é só ir em ```src/components/ui``` e criar uma nova pasta e um arquivo ```index.ts``` e seguir o mesmo processo descrito anteriormente.



