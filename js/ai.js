const loadAiUniverse =async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const aiUniverse = data.data;
    displayAiUniverse(aiUniverse);
}
loadAiUniverse();

const displayAiUniverse = (ai) =>{
    // console.log(ai);
    const allItems = ai.tools;
    // console.log(allItems);
    allItems.forEach(item => {
        console.log(item);
    });
}
