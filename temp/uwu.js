<LunaContainer margin={[LunaContainer.l30.horizontal]} padding={[LunaContainerPaddings.l10.horizontal]}>
    <LunaTable className={'luna-table luna-table-size-29'}>
        <LunaTable.Head>
            <LunaTable.row>
                <LunaTable.CellHeader>Types</LunaTable.CellHeader>
                <LunaTable.CellHeader>Toppings</LunaTable.CellHeader>
            </LunaTable.row>
        </LunaTable.Head>
        <LunaTable.Body>
            <LunaTable.Row>
                <LunaTable.CellText>
                    Pizza
                </LunaTable.CellText>
                <LunaTable.CellText
                    supportiveContent={[
                        <LunaSupportiveContentItem key={"1"} tagColor={LunaTagColors.red}>Tomatoes</LunaSupportiveContentItem>,
                        <LunaSupportiveContentItem key={"1"} tagColor={LunaTagColors.red}>Broccoli</LunaSupportiveContentItem>
                    ]}
                >
                    Vegetables
                </LunaTable.CellText>
            </LunaTable.Row>
        </LunaTable.Body>
    </LunaTable>
</LunaContainer>

LunaTableCellTypes = {
    action: 'action',
    figure: 'figure',
    icon: 'icon',
    tagList: 'tagList',
    text: 'text'
}





let curr = "1";
    
for (let i = 1; i < n; ++i) {
    let temp = "";
    
    let cursor = 0;
    let lastChar = curr[0];
    let count = 0;
    
    while (cursor < curr.length) {
        if (lastChar !== curr[cursor]) {
            temp += count + lastChar;
            lastChar = curr[cursor];
            count = 0;
        }
        cursor += 1;
        count += 1;
    }
    
    temp += count + lastChar;
    curr = temp;
}

return curr;
