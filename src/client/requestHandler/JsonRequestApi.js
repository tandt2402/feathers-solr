/**
 * Solr Config API
 * https://cwiki.apache.org/confluence/display/solr/JSON+Request+API
 *
 *  curl http://localhost:8983/solr/gettingstarted/query -d '
 *  {
 *    "query" : "*:*",
 *    "filter" : "id:222"
 *  }'
 *
 *  body: {
 *      query: '*:*',
 *      filter : 'id:222'
 *
 *  },
 *
 * curl http://localhost:8983/solr/gettingstarted/query -d '
 * {
 *   query:"doc"
 * }'
 *
 *
 * curl http://localhost:8983/solr/gettingstarted/query -d '
 * {
 *     query:"*:*",
 *     limit:"10",
 *     offset:"0",
 *     sort:"_version_ desc",
 *     fields:"*"
 *  }'
 */
export default (request, opts, query) => {

    let options = {
        method: 'POST',
        uri: opts.coreUrl + '/query',

        body:  Object.assign({
            query: '*:*',
        }, query),
        json: true
    };
    // console.log('JSON API OPTIONS',options);
    // console.log('JSON API query',query.filter);
    return request.get(options);
};


