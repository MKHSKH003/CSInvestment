const selectChatGroups = groups =>
    groups.map(g => ({
           ...g,
           Messages: g.Messages.sort((a,b) => (a.Id > b.Id) ? 1 : -1),
    }))

export {
    selectChatGroups
}