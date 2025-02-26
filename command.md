<!-- Things to keep in mind using commands -->

1. Commands must be all lower cases.

2. Commands must not contain spaces or symbols other than (-) and (\_).

3. Initially an interaction token is only valid for three seconds, so that's the timeframe in which you are able to use the ChatInputCommandInteraction#reply() method. Responses that require more time ("Deferred Responses").

4. After the initial response, an interaction token is valid for 15 minutes, so this is the timeframe in which you can edit the response and send follow-up messages. You also cannot edit the ephemeral state of a message, so ensure that your first response sets this correctly.

5. In .addStringOption we add only name of sub command not special characters like (:);

# Deferred responses

As previously mentioned, Discord requires an acknowledgement from your bot within three seconds that the interaction was received. Otherwise, Discord considers the interaction to have failed and the token becomes invalid. But what if you have a command that performs a task which takes longer than three seconds before being able to reply?

In this case, you can make use of the ChatInputCommandInteraction#deferReply() method, which triggers the <application> is thinking... message. This also acts as the initial response, to confirm to Discord that the interaction was received successfully and gives you a 15-minute timeframe to complete your tasks before responding.
