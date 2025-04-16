module.exports = function (api) {
    return {
      presets: ["nativewind/babel"],
      plugins: [
        "<plugin-causing-issue>",
       [
         "@babel/plugin-transform-react-jsx",
         {
           runtime: "automatic",
           importSource: "nativewind",
         },
       ],
      ],
    };
  };