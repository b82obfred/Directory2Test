Ext.define('Mobile.store.ListingsResultsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Mobile.model.ListingsResultsModel',
        //sorters: 'Name',

        pageSize: 10,
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: 'http://directory2.business2mobile.com/DesktopModules/WebApiB2M/API/Directory2/ListingsDataFeedGet',

            pageParam: 'page',
            limitParam: 'rpp',
            
            extraParams: {
                q: 'featured'
            },

            method: 'get',

            reader: {
                type: 'json'
            }
        }
    }
});