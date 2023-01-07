---
title: "Announcing Formalityx: In Search of the Right Abstraction"
description: Gain insight into my thought process when engineering a form management solution. Explore the level of abstraction that I believe is both efficient and capable of meeting the majority of needs for a positive user experience with forms.
date: 01-07-2023
---
The title of this blog post is highly engaging and promising, but its description better reflects the contents.

I have indeed released my first npm package called [Formalityx](https://www.npmjs.com/package/@manageform/formalityx-core), but it is not yet a comprehensive form management solution that you can readily integrate into any production app featuring a form. It is merely a concept at version [0.1.0](https://www.npmjs.com/package/@manageform/formalityx-core/v/0.1.0) that I wanted to get out there as a tangible prototype.

My aim is to expand upon [Formalityx](https://www.npmjs.com/package/@manageform/formalityx-core) by introducing patterns that I believe are applicable to effectively working with forms, rather than just rotating these concepts in my head.

## Where It Started

### Change of Plans

Honestly, the title of this blog post was more concise when I first started writing it a week ago: it didn't have the 'announcement' part, and only consisted of 'In Search of the Right Abstraction.' 

I still intended to discuss my ideas about how I envision form management in the future, but it would have revolved around [the discussion](https://twitter.com/isaac_ts_way/status/1609657677033922560) of this new abstraction called ['TypeScript Form'](https://github.com/iway1/react-ts-form) on top of [React Hook Form](https://github.com/react-hook-form/react-hook-form) - the form handling package that I help maintain.

### The Depth of Abstraction

[TypeScript Form](https://github.com/iway1/react-ts-form) streamlines the process of creating forms by generating JSX for you and providing tighter type-safety with [Zod](https://github.com/colinhacks/zod) - the validation library. It abstracts away the process of registering form inputs at a higher level and shifts your focus as a developer to defining the individual components' API underneath, or eliminating the need altogether if you are using an already developed components library. This approach can significantly accelerate the development of a complete form experience and can even significantly mitigate burnout if you're "in that boat" during a sprint, tasked with constructing numerous forms for your clients (I've been there all too often).

In the software development community, abstracting away boilerplate is actively encouraged. It's a common practice to build a solution to synthesize an already solved version of the problem. However, it's important to remember that abstraction is not always a guaranteed victory, but rather a trade-off: you hide a code block that you aim to streamline or eliminate entirely within an API that either prevents you from customizing the abstracted behavior, or exposes an ever-growing API surface that becomes a lengthy section in the documentation that you must familiarize yourself with and maintain, introducing its own level of complexity on top of what you previously believed was a fully resolved issue.

TypeScript Form significantly reduces the effort required to properly connect all form parts and data flow within it, resulting in a solution that is rigid enough to set strict guidelines for building forms in a specific way that minimizes errors and increases the time needed to customize logic for a specific use case not accounted for by the solution. It is worth noting that, by the inherent nature of abstraction, it is necessary to invest time in determining if the solution is suitable for you, which has the potential to either significantly boost productivity or significantly complicate your codebase by attempting to bypass it.

Understanding the significance of abstraction and where the necessity for it originates, as well as recognizing the depth of understanding required to successfully solve the problem and the effort required to build and maintain the solution, can help in creating the optimal level of abstraction.

## My Approach to Building Formalityx

You may have been able to infer some of my principles I'm going to adhere to when architecting Formalityx from reading my opinion on how TypeScript Form handles forms API. You can find most of them in my responses to React Hook Form users on GitHub and in my Twitter replies.

Rather than going off on another tangent, here are some of the feature descriptions I've written for the small API that is Formalityx:

> ### Add HTML5 constraint validation support 
>
> For the first iteration _(as a POC)_, the idea is to create an API that takes advantage of [the HTML constraint validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation). This would allow me to showcase the "freedom" of the Formalityx API as well as to "nudge" users to embrace the platform and its API they are working on.
> 
> This approach only supports "uncontrolled" inputs: there is no "reactive" values passed back into the input element to control its value _(the whole "embrace the platform" point from the previous paragraph)_.
> 
> Furthermore, this approach enables to use the Formalityx API everywhere: it is, as the cool kids would say, **truly** framework-agnostic. The reactivity bits are a part of the next enhancements. The idea is to focus on the Web platform API first and gradually "embrace" the reactivity _(this is where the framework adapters and the new framework-specific packages come in)_.

> ###  Add HTML input attributes setter
>
> This approach should allow the user to pass down [the Web-specific validation attributes](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) and store them in the Form to reuse later in other parts of the form. The method should also return the "Web-compliant" versions of the same attributes, meaning their types will be closer to what HTML input elements expect: strings and numbers, not JS objects, RegExp, or Date. Ideally, you should be able to spread (...) the returned attributes as props into the HTML inputs of the form.

> ### Add "granular" field validation method
>
> A simple method that takes in an input element and derives the input validity state from its [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState).
> 
> In the future, the method might take a field name instead, but the current POC API is focused on leveraging the most out of the HTML5 validation API. The input element has all the input's properties like name, its attributes, and most importantly - its [validity state](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState); there's no need to write additional API when you can just take what the Web already has.
> 
> The validation constraints are based on what is passed to the input attributes setter.
> 
> This method doesn't prevent the form from being submitted. Instead, it returns a field error and its type, which is based on a mapping of input validity state to HTML validation attributes.

> ### Add form validity method
>
> A method that simply references the HTML form's [checkValidity() method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/checkValidity) to determine if the form is valid.
> 
> It should take 2 callbacks: onValid and onInvalid. I am still debating whether allowing the method to be async is worth it or not _(think [Tanstack Query](https://github.com/TanStack/query) [mutation callbacks](https://tanstack.com/query/v4/docs/react/guides/mutations#mutation-side-effects))_. Anyway, it will not be included until the POC release as its focus is to leverage the HTML5 constraint validation: no async needed.
> 
> The beauty of this method is that it can be called anywhere at any time: it can be a hard "no" on invalid form values or only a suggestion/warning; the form can still be submitted.

## Closing words

Thank you, reader, even if this is the only sentence you read, for the fraction of your time devoted to reading this. I am an extremely passionate engineer (perhaps too much, to be honest) and solving forms is one of the primary reasons I joined React Hook Form and now contribute to the acceleration of global warming by deploying my mind for thousands of developers to see in the form of Formalityx.

I would like to express my special thanks to my wife, who has to endure my new hobby (obsession) of developing my own library and the late hours I have spent obsessing over the words I want to put into this announcement blog post that has turned into both an inconclusive review of the TypeScript Form package and a discussion on the topic of form management.
