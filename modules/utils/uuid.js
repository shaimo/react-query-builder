// Had to make uuid use a constant seed so it would generate same sequence across runs. This was needed
// so server side rendering and client side rendering yield same results (e.g. the uuid is used when rendering
// the concunctions with their name and id)
var query_builder_seed = 0;
export default () =>
  // Generate a random GUID http://stackoverflow.com/a/2117523.
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//    const r = Math.random() * 16 | 0;
    const r = (query_builder_seed++) & 0xf;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
