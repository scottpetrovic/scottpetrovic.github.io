---
title: "Programmatic weight painting example with three.js"
date: "2023-10-13"

---

Earlier in the year, I went through a great three.js training course learning more about WebGL and the WebGL framework three.js. You get a certificate that you can share with people for resum&eacute; purposes (e.g. https://threejs-journey.com/certificate/view/27115). It is a really good course. While I don't really use this at my day job, it is a fascinating area in web technology. 

A side project that I thought would be fun is making a sort of Mixamo clone. Mixamo allows you to upload a 3d model, and in a couple minutes you can have animations applied to it. While the Mixamo site is still active, the development is pretty dead. I am kind of surprised there haven't been an open sourced version.  While this too large of a project for one person to do, the idea of doing so much with animation programatically is intriguing with just uploading a model.

In this short tutorial/explainer, I am going through a "simple" three.js project that programatically creates bones and assigns bone weights based off a simple formula. The idea is to get a better understanding with how to work with programmatic animation with three.js.

Here is the code pen for it that I heavily commented to help with understanding. Instead of just saying everything again, you can click on the "edit on codepen" image which will take you to the code. You can just click this link: https://codepen.io/Scott-Petrovic/pen/vYvwWGx

{{< codepen id="vYvwWGx" >}}

## Additional Notes

There are various examples online that show how to create bones and assign them to a mesh such as the official documentation https://threejs.org/docs/#api/en/objects/SkinnedMesh. 

One part of the explanations that I just didn't understand was how the *skinIndex* and *skinWeight* attributes worked. This are a few points I learned about these two attributes that are assigned to the mesh. Specifically this snippet of the code.

    const bone1Index = 0;
    const bone2Index = 1;
    skinIndices.push(bone1Index, bone2Index, 0, 0);
    skinWeights.push(bone1Weight, bone2Weight, 0, 0);

- skinIndex and skinWeight are directly related. The index 0 of skinIndex is directly tied to the index of skinWeight
- There are 4 values with each attribute becuase each vertex can have up to 4 bones that can influence it
- skinIndex comes from the order you add the bones to the SkinnedMesh (const skeleton = new THREE.Skeleton([bone1, bone2]);)
- It is ok to just list the 3rd and 4th bone weights to 0. Even though it is technically attached to the first bone, the weight is 0, which will make it unused.
- ChatGPT is good and terrible. It wasn't too bad at coming up with a high level idea of how to structure code. Once it got into the details, it seemed to mess up just about everything. This consumed a decent amount of time undoing mistakes. 
- ChatGPT gets really confused with different versions of a library. It seemed to always use APIs for old versions for three.js. I would have to constantly tell it that certain functions or classes don't exist.

## Next Steps
After understanding the basic of how the bone weights work, a few new mini projects that could be interesting would be the following:
- Better algorithm for calculating bone weight that make the model stretch more naturally
- Experiment with parenting bones to create a "forward kinematics" type of setup
- A more complex model to see how the weighting algorithm could be improved