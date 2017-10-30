
$.ajax({
    url: 'https://globalindices.xignite.com/xglobalindices.json/GetDelayedIndexValue?IdentifierType=Symbol&Identifier=NIFTY50.INDXNSE&_token=A3023B3972F449D1A0E30EFB26D7E238',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) {
        console.log(data);
        $(data.Index).each(function(index, value){
            $("#niftysym").html(value.Symbol);
        });

        $(data.Value).each(function(index, value){
            $("#niftylast").html(value.Last);
            $("#niftychange").html(value.ChangeFromOpen);
        });
    }

});

$.ajax({
    url: 'https://globalindices.xignite.com/xglobalindices.json/GetDelayedIndicesValue?IdentifierType=Symbol&Identifiers=SPX.INDCBSX&_token=A3023B3972F449D1A0E30EFB26D7E238',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) {
        console.log(data);
        $(data[0].Index).each(function(index, value){
            $("#spxsym").html(value.Symbol);
        });

        $(data[0].Value).each(function(index, value){
            $("#spxlast").html(value.Last);
            $("#spxchange").html(value.ChangeFromOpen);
        });
    }

});

$.ajax({
    url: 'https://globalindices.xignite.com/xglobalindices.json/GetDelayedIndexValue?IdentifierType=Symbol&Identifier=NYA.IND_GIF&_token=A3023B3972F449D1A0E30EFB26D7E238',
    dataType: 'json',
    type: 'get',
    cache: true,
    success: function(data) {
        console.log(data);
        $(data.Index).each(function(index, value){
            $("#nysesym").html(value.Symbol);
        });

        $(data.Value).each(function(index, value){
            $("#nyselast").html(value.Last);
            $("#nysechange").html(value.ChangeFromOpen);
        });
    }

});