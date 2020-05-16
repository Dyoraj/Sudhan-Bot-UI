var botui = new BotUI("hello-world");
var human_name = "None";
var human_description = "None";
var human_feedback = "None";
var human_subed = "None";
botui.message
  .add({
    content: "Hello, Whats your name?",
    delay: 1000
  })
  .then(function() {
    // wait till previous message has been shown.

    botui.action
      .text({
        addMessage: false,
        delay: 1000,
        action: {
          placeholder: "Your name"
        }
      })
      .then(function(res) {
        human_name = res.value;
        botui.message
          .add({
            human: true,
            delay: 500,
            content: "My name is " + res.value
          })
          .then(function(res) {
            botui.message
              .add({
                content: "Nice to meet you " + human_name + "!",
                delay: 1000
              })
              .then(function(res) {
                botui.message
                  .add({
                    content: "Can you tell about yourself",
                    delay: 1000
                  })
                  .then(function(res) {
                    botui.action
                      .text({
                        addMessage: false,
                        delay: 1000,
                        action: {
                          placeholder: "Your description"
                        }
                      })
                      .then(function(res) {
                        human_description = res.value;
                        botui.message
                          .add({
                            human: true,
                            content:
                              "My Description: " + human_description + ".",
                            delay: 1000
                          })
                          .then(function(res) {
                            botui.message
                              .add({
                                content: "Okay Cool :)",
                                delay: 1000
                              })
                              .then(function(res) {
                                botui.message
                                  .add({
                                    content: "Can you rate about this?",
                                    delay: 1000
                                  })
                                  .then(function(res) {
                                    botui.action
                                      .button({
                                        delay: 1000,
                                        action: [
                                          {
                                            text: "🌟",
                                            value: "1"
                                          },
                                          {
                                            text: "🌟🌟",
                                            value: "2"
                                          },
                                          {
                                            text: "🌟🌟🌟",
                                            value: "3"
                                          },
                                          {
                                            text: "🌟🌟🌟🌟",
                                            value: "4"
                                          },
                                          {
                                            text: "🌟🌟🌟🌟🌟",
                                            value: "5"
                                          }
                                        ]
                                      })
                                      .then(function(res) {
                                        human_feedback = res.value;
                                        botui.message
                                          .add({
                                            content: "Thanks for the feedback",
                                            delay: 1000
                                          })
                                          .then(function(res) {
                                            botui.message
                                              .add({
                                                content:
                                                  "Btw go and Subscribe Sudhan Playz [Click me](https://www.youtube.com/c/sudhanplayz/home?sub_confirmation=1)",
                                                delay: 1000
                                              })
                                              .then(function(res) {
                                                botui.action
                                                  .button({
                                                    delay: 1000,
                                                    action: [
                                                      {
                                                        text: "Done",
                                                        value: "done"
                                                      },
                                                      {
                                                        text: "No",
                                                        value: "no"
                                                      },
                                                      {
                                                        text: "I already done",
                                                        value: "allready_done"
                                                      }
                                                    ]
                                                  })
                                                  .then(function(res) {
                                                    human_subed = res.value;
                                                    botui.message
                                                      .add({
                                                        content:
                                                          "Thanks " +
                                                          human_name,
                                                        delay: 1000
                                                      })
                                                      .then(function(res) {
                                                        botui.message
                                                          .add({
                                                            content:
                                                              "Can you join the discord? [Click Me](https://discord.gg/ABwXPhZ)",
                                                            delay: 1000
                                                          })
                                                          .then(function(res) {
                                                            botui.action
                                                              .button({
                                                                delay: 1000,
                                                                action: [
                                                                  {
                                                                    text:
                                                                      "Done",
                                                                    value:
                                                                      "done"
                                                                  },
                                                                  {
                                                                    text: "No",
                                                                    value: "no"
                                                                  }
                                                                ]
                                                              })
                                                              .then(function(
                                                                res
                                                              ) {
                                                                if (
                                                                  res.value ===
                                                                  "done"
                                                                ) {
                                                                  botui.message.add(
                                                                    {
                                                                      content:
                                                                        "Thanks for joining the Discord Server",
                                                                      delay: 1000
                                                                    }
                                                                  );
                                                                }
                                                                if (
                                                                  res.vaue ===
                                                                  "no"
                                                                ) {
                                                                  botui.message.add(
                                                                    {
                                                                      content:
                                                                        "Okay, Thanks for chatting with me",
                                                                      delay: 1000
                                                                    }
                                                                  );
                                                                }
                                                              })
                                                              .then(function(
                                                                res
                                                              ) {
                                                                botui.message
                                                                  .add({
                                                                    content:
                                                                      "Still you like me?",
                                                                    delay: 1000
                                                                  })
                                                                  .then(
                                                                    function(
                                                                      res
                                                                    ) {
                                                                      botui.action.button(
                                                                        {
                                                                          delay: 2000,
                                                                          action: [
                                                                            {
                                                                              text:
                                                                                "Yeah",
                                                                              value:
                                                                                "yeah"
                                                                            },
                                                                            {
                                                                              text:
                                                                                "Not Sure",
                                                                              value:
                                                                                "no"
                                                                            }
                                                                          ]
                                                                        }
                                                                      );
                                                                    }
                                                                  );
                                                              });
                                                          });
                                                      });
                                                  });
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
