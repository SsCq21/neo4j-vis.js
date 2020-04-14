
var AUTHORIZATION = "Basic " + btoa("neo4j:password");

/**
 * Uses JQuery to post an ajax request on Neo4j REST API
 */
function restPost(data) {
    var strData = JSON.stringify(data);
    return $.ajax({
                  type: "POST",
                  beforeSend: function (request) {
                  if (AUTHORIZATION != undefined) {
                  request.setRequestHeader("Authorization", AUTHORIZATION);
                  }
                  },
                  url: $("#protocolinput").val() + "://" + $("#hostinput").val() + ":" + $("#portinput").val() + "/db/data/transaction/commit",
                  contentType: "application/json",
                  data: strData
                  });
}

/**
 * Function to call to display a new graph.
 */
function displayGraph() {
    // Create the authorization header for the ajax request.
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    // Show loading elements.
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    // Post Cypher query to return node and relations and return results as graph.
    restPost({
             "statements": [
                            {
                            "statement": "match (n),()-[r]-() return n,r limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     // Parse results and convert it to vis.js compatible data.
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayAttackTarget() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (a:attack),(a:attack)-[r]-(t:target) return a,r,t limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayAttackWeapon() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (a:attack),(a:attack)-[r]-(w:weapon) return a,r,w limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayAttackGname() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (a:attack),(a:attack)-[r]-(g:gname) return a,r,g limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayWeaponTarget() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (t:target),(t:target)-[r]-(g:gname) return t,r,g limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayTargetDate() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (t:target),(t:target)-[r]-(g:gname) return t,r,g limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayTargetRegion() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (t:target),(t:target)-[r2]-(r:region) return t,r2,r limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayGnameDate() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (g:gname),(g:gname)-[r]-(d:date) return g,r,d limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}

function displayGnameRegion() {
    AUTHORIZATION = "Basic " + btoa($("#userinput").val() + ":" + $("#passinput").val());
    
    $("#loading").show();
    $("#loadingBar").show();
    document.getElementById('text').innerHTML = '0%';
    document.getElementById('bar').style.width = '0';
    document.getElementById('loadingBar').style.opacity = 1;
    
    var limit = document.getElementById("limit").value;
    
    restPost({
             "statements": [
                            {
                            "statement": "match (g:gname),(g:gname)-[r2]-(r:region) return g,r2,r limit " + limit,
                            "resultDataContents": ["graph"]
                            }
                            ]
             }).done(function (data) {
                     $("#loading").hide();
                     
                     var graphData = parseGraphResultData(data);
                     var nodes = convertNodes(graphData.nodes);
                     var edges = convertEdges(graphData.edges);
                     var visData = {
                     nodes: nodes,
                     edges: edges
                     };
                     
                     displayVisJsData(visData);
                     });
}


function displayVisJsData(data) {
    var container = document.getElementById('vis');
    
    var options = {
    nodes: {
    shape: 'circle'
    },
    edges: {
    arrows: 'to'
    }
    };
    
    // initialize the network!
    var network = new vis.Network(container, data, options);
    
    network.on("stabilizationProgress", function (params) {
               var maxWidth = 496;
               var minWidth = 20;
               var widthFactor = params.iterations / params.total;
               var width = Math.max(minWidth, maxWidth * widthFactor);
               
               document.getElementById('bar').style.width = width + 'px';
               document.getElementById('text').innerHTML = Math.round(widthFactor * 100) + '%';
               });
    network.once("stabilizationIterationsDone", function () {
                 document.getElementById('text').innerHTML = '100%';
                 document.getElementById('bar').style.width = '496px';
                 document.getElementById('loadingBar').style.opacity = 0;
                 // really clean the dom element
                 setTimeout(function () {
                            $("#loadingBar").hide();
                            }, 500);
                 });
}

function parseGraphResultData(data) {
    var nodes = {}, edges = {};
    data.results[0].data.forEach(function (row) {
                                 row.graph.nodes.forEach(function (n) {
                                                         if (!nodes.hasOwnProperty(n.id)) {
                                                         nodes[n.id] = n;
                                                         }
                                                         });
                                 
                                 row.graph.relationships.forEach(function (r) {
                                                                 if (!edges.hasOwnProperty(r.id)) {
                                                                 edges[r.id] = r;
                                                                 }
                                                                 });
                                 });
    
    var nodesArray = [], edgesArray = [];
    
    for (var p in nodes) {
        if (nodes.hasOwnProperty(p)) {
            nodesArray.push(nodes[p]);
        }
    }
    
    for (var q in edges) {
        if (edges.hasOwnProperty(q)) {
            edgesArray.push(edges[q])
        }
    }
    
    return {nodes: nodesArray, edges: edgesArray};
}

function convertNodes(nodes) {
    var convertedNodes = [];
    
    nodes.forEach(function (node) {
                  var nodeLabel = node.labels[0];
                  var displayedLabel = nodeLabel + ("\n" + node.properties[Object.keys(node.properties)[0]]).substr(0, 20);
                  convertedNodes.push({
                                      id: node.id,
                                      label: displayedLabel,
                                      group: nodeLabel
                                      })
                  });
    
    return convertedNodes;
}

function convertEdges(edges) {
    var convertedEdges = [];
    
    edges.forEach(function (edge) {
                  convertedEdges.push({
                                      from: edge.startNode,
                                      to: edge.endNode,
                                      label: edge.type
                                      })
                  });
    
    return convertedEdges;
}

