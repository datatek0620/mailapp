const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('⌲ MailApp')
    .addItem('Show SideBar', 'showSideBar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();
};

export default onOpen;
