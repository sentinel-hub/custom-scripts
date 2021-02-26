# CORINE Land Cover visualisation script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
      {% include_relative script.js %}
{% endhighlight %}
</div>

## General description

Visualisation script for CORINE Land Cover data available in our [public collections](https://github.com/sentinel-hub/public-collections).

Table 1: CORINE Land Cover nomenclature and colouring scheme.

</br>
<style type="text/css">
    .tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
    .tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
      font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
      font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-yvt2{background-color:#ccffcc;text-align:center;vertical-align:top}
    .tg .tg-sz9i{background-color:#a6ff80;text-align:center;vertical-align:top}
    .tg .tg-jptu{background-color:#e6cccc;text-align:center;vertical-align:top}
    .tg .tg-i17e{background-color:#00ccf2;text-align:center;vertical-align:top}
    .tg .tg-bzqc{background-color:#e6e600;text-align:center;vertical-align:top}
    .tg .tg-kkh9{background-color:#ffe6a6;text-align:center;vertical-align:top}
    .tg .tg-u8lh{background-color:#f2cca6;text-align:center;vertical-align:top}
    .tg .tg-u0ju{background-color:#e68000;text-align:center;vertical-align:top}
    .tg .tg-qup0{background-color:#e6e6ff;text-align:center;vertical-align:top}
    .tg .tg-p6u6{background-color:#a600cc;text-align:center;vertical-align:top}
    .tg .tg-0hd6{background-color:#ccf24d;text-align:center;vertical-align:top}
    .tg .tg-5ycx{background-color:#ffa6ff;text-align:center;vertical-align:top}
    .tg .tg-buh4{background-color:#f9f9f9;text-align:left;vertical-align:top}
    .tg .tg-fqis{background-color:#e6cce6;text-align:center;vertical-align:top}
    .tg .tg-cpq8{background-color:#a6e6cc;text-align:center;vertical-align:top}
    .tg .tg-dw4t{background-color:#a6ffe6;text-align:center;vertical-align:top}
    .tg .tg-v16d{background-color:#f9f9f9;border-color:#cccccc;text-align:left;vertical-align:top}
    .tg .tg-65iu{border-color:#cccccc;text-align:left;vertical-align:top}
    .tg .tg-yfbn{background-color:#e6e6e6;text-align:center;vertical-align:top}
    .tg .tg-thk7{background-color:#f9f9f9;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-3y57{background-color:#80ff00;text-align:center;vertical-align:top}
    .tg .tg-xrua{background-color:#e6cc4d;text-align:center;vertical-align:top}
    .tg .tg-w08x{background-color:#a64d00;text-align:center;vertical-align:top}
    .tg .tg-tw9y{background-color:#cc0000;text-align:center;vertical-align:top}
    .tg .tg-bzyr{background-color:#ffff00;text-align:center;vertical-align:top}
    .tg .tg-0fmr{background-color:#ff4dff;text-align:center;vertical-align:top}
    .tg .tg-lwbn{background-color:#4dff00;text-align:center;vertical-align:top}
    .tg .tg-quxf{background-color:#ffffff;text-align:center;vertical-align:top}
    .tg .tg-uhwp{background-color:#a6a6ff;text-align:center;vertical-align:top}
    .tg .tg-z9l6{background-color:#cc4df2;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-58ep{background-color:#efefef;border-color:#cccccc;font-weight:bold;text-align:center;vertical-align:top}
    .tg .tg-hm7l{background-color:#e6004d;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-o57c{border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-igv9{background-color:#ff0000;border-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    .tg .tg-48se{background-color:#ffe6ff;text-align:center;vertical-align:top}
    .tg .tg-ehqp{background-color:#ffffa8;text-align:center;vertical-align:top}
    .tg .tg-g4qz{background-color:#f2a64d;text-align:center;vertical-align:top}
    .tg .tg-3r4j{background-color:#e6a600;text-align:center;vertical-align:top}
    .tg .tg-smbw{background-color:#e6e64d;text-align:center;vertical-align:top}
    .tg .tg-sqt7{background-color:#ffe64d;text-align:center;vertical-align:top}
    .tg .tg-ma8f{background-color:#00a600;text-align:center;vertical-align:top}
    .tg .tg-da8g{background-color:#a6e64d;text-align:center;vertical-align:top}
    .tg .tg-kzwu{background-color:#a6f200;text-align:center;vertical-align:top}
    .tg .tg-5tql{background-color:#cccccc;text-align:center;vertical-align:top}
    .tg .tg-p19p{background-color:#000000;text-align:center;vertical-align:top}
    .tg .tg-yqze{background-color:#4d4dff;text-align:center;vertical-align:top}
    .tg .tg-ccod{background-color:#ccccff;text-align:center;vertical-align:top}
    .tg .tg-1zfs{background-color:#a6a6e6;text-align:center;vertical-align:top}
    .tg .tg-q4oy{background-color:#80f2e6;text-align:center;vertical-align:top}
    .tg .tg-6sen{background-color:#00ffa6;text-align:center;vertical-align:top}
    .tg .tg-uk0n{background-color:#e6f2ff;text-align:center;vertical-align:top}
    </style>
    <table class="tg">
    <thead>
      <tr>
        <th class="tg-58ep">Value</th>
        <th class="tg-58ep">Color</th>
        <th class="tg-58ep">Label</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-thk7">1</td>
        <td class="tg-hm7l"></td>
        <td class="tg-v16d">111 - Continuous urban fabric</td>
      </tr>
      <tr>
        <td class="tg-o57c">2</td>
        <td class="tg-igv9"></td>
        <td class="tg-65iu">112 - Discontinuous urban fabric</td>
      </tr>
      <tr>
        <td class="tg-thk7">3</td>
        <td class="tg-z9l6"></td>
        <td class="tg-v16d">121 - Industrial or commercial units</td>
      </tr>
      <tr>
        <td class="tg-o57c">4</td>
        <td class="tg-tw9y"></td>
        <td class="tg-0lax">122 - Road and rail networks and associated land</td>
      </tr>
      <tr>
        <td class="tg-thk7">5</td>
        <td class="tg-jptu"></td>
        <td class="tg-buh4">123 - Port areas</td>
      </tr>
      <tr>
        <td class="tg-o57c">6</td>
        <td class="tg-fqis"></td>
        <td class="tg-0lax">124 - Airports</td>
      </tr>
      <tr>
        <td class="tg-thk7">7</td>
        <td class="tg-p6u6"></td>
        <td class="tg-buh4">131 - Mineral extraction sites</td>
      </tr>
      <tr>
        <td class="tg-o57c">8</td>
        <td class="tg-w08x"></td>
        <td class="tg-0lax">132 - Dump sites</td>
      </tr>
      <tr>
        <td class="tg-thk7">9</td>
        <td class="tg-0fmr"></td>
        <td class="tg-buh4">133 - Construction sites</td>
      </tr>
      <tr>
        <td class="tg-o57c">10</td>
        <td class="tg-5ycx"></td>
        <td class="tg-0lax">141 - Green urban areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">11</td>
        <td class="tg-48se"></td>
        <td class="tg-buh4">142 - Sport and leisure facilities</td>
      </tr>
      <tr>
        <td class="tg-o57c">12</td>
        <td class="tg-ehqp"></td>
        <td class="tg-0lax">211 - Non-irrigated arable land</td>
      </tr>
      <tr>
        <td class="tg-thk7">13</td>
        <td class="tg-bzyr"></td>
        <td class="tg-buh4">212 - Permanently irrigated land</td>
      </tr>
      <tr>
        <td class="tg-o57c">14</td>
        <td class="tg-bzqc"></td>
        <td class="tg-0lax">213 - Rice fields</td>
      </tr>
      <tr>
        <td class="tg-thk7">15</td>
        <td class="tg-u0ju"></td>
        <td class="tg-buh4">221 - Vineyards</td>
      </tr>
      <tr>
        <td class="tg-o57c">16</td>
        <td class="tg-g4qz"></td>
        <td class="tg-0lax">222 - Fruit trees and berry plantations</td>
      </tr>
      <tr>
        <td class="tg-thk7">17</td>
        <td class="tg-3r4j"></td>
        <td class="tg-buh4">223 - Olive groves</td>
      </tr>
      <tr>
        <td class="tg-o57c">18</td>
        <td class="tg-smbw"></td>
        <td class="tg-0lax">231 - Pastures</td>
      </tr>
      <tr>
        <td class="tg-thk7">19</td>
        <td class="tg-kkh9"></td>
        <td class="tg-buh4">241 - Annual crops associated with permanent crops</td>
      </tr>
      <tr>
        <td class="tg-o57c">20</td>
        <td class="tg-sqt7"></td>
        <td class="tg-0lax">242 - Complex cultivation patterns</td>
      </tr>
      <tr>
        <td class="tg-thk7">21</td>
        <td class="tg-xrua"></td>
        <td class="tg-buh4">243 - Land principally occupied by agriculture with significant areas of natural vegetation</td>
      </tr>
      <tr>
        <td class="tg-o57c">22</td>
        <td class="tg-u8lh"></td>
        <td class="tg-0lax">244 - Agro-forestry areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">23</td>
        <td class="tg-3y57"></td>
        <td class="tg-buh4">311 - Broad-leaved forest</td>
      </tr>
      <tr>
        <td class="tg-o57c">24</td>
        <td class="tg-ma8f"></td>
        <td class="tg-0lax">312 - Coniferous forest</td>
      </tr>
      <tr>
        <td class="tg-thk7">25</td>
        <td class="tg-lwbn"></td>
        <td class="tg-buh4">313 - Mixed forest</td>
      </tr>
      <tr>
        <td class="tg-o57c">26</td>
        <td class="tg-0hd6"></td>
        <td class="tg-0lax">321 - Natural grasslands</td>
      </tr>
      <tr>
        <td class="tg-thk7">27</td>
        <td class="tg-sz9i"></td>
        <td class="tg-buh4">322 - Moors and heathland</td>
      </tr>
      <tr>
        <td class="tg-o57c">28</td>
        <td class="tg-da8g"></td>
        <td class="tg-0lax">323 - Sclerophyllous vegetation</td>
      </tr>
      <tr>
        <td class="tg-thk7">29</td>
        <td class="tg-kzwu"></td>
        <td class="tg-buh4">324 - Transitional woodland-shrub</td>
      </tr>
      <tr>
        <td class="tg-o57c">30</td>
        <td class="tg-yfbn"></td>
        <td class="tg-0lax">331 - Beaches - dunes - sands</td>
      </tr>
      <tr>
        <td class="tg-thk7">31</td>
        <td class="tg-5tql"></td>
        <td class="tg-buh4">332 - Bare rocks</td>
      </tr>
      <tr>
        <td class="tg-o57c">32</td>
        <td class="tg-yvt2"></td>
        <td class="tg-0lax">333 - Sparsely vegetated areas</td>
      </tr>
      <tr>
        <td class="tg-thk7">33</td>
        <td class="tg-p19p"></td>
        <td class="tg-buh4">334 - Burnt areas</td>
      </tr>
      <tr>
        <td class="tg-o57c">34</td>
        <td class="tg-cpq8"></td>
        <td class="tg-0lax">335 - Glaciers and perpetual snow</td>
      </tr>
      <tr>
        <td class="tg-thk7">35</td>
        <td class="tg-uhwp"></td>
        <td class="tg-buh4">411 - Inland marshes</td>
      </tr>
      <tr>
        <td class="tg-o57c">36</td>
        <td class="tg-yqze"></td>
        <td class="tg-0lax">412 - Peat bogs</td>
      </tr>
      <tr>
        <td class="tg-thk7">37</td>
        <td class="tg-ccod"></td>
        <td class="tg-buh4">421 - Salt marshes</td>
      </tr>
      <tr>
        <td class="tg-o57c">38</td>
        <td class="tg-qup0"></td>
        <td class="tg-0lax">422 - Salines</td>
      </tr>
      <tr>
        <td class="tg-thk7">39</td>
        <td class="tg-1zfs"></td>
        <td class="tg-buh4">423 - Intertidal flats</td>
      </tr>
      <tr>
        <td class="tg-o57c">40</td>
        <td class="tg-i17e"></td>
        <td class="tg-0lax">511 - Water courses</td>
      </tr>
      <tr>
        <td class="tg-thk7">41</td>
        <td class="tg-q4oy"></td>
        <td class="tg-buh4">512 - Water bodies</td>
      </tr>
      <tr>
        <td class="tg-o57c">42</td>
        <td class="tg-6sen"></td>
        <td class="tg-0lax">521 - Coastal lagoons</td>
      </tr>
      <tr>
        <td class="tg-thk7">43</td>
        <td class="tg-dw4t"></td>
        <td class="tg-buh4">522 - Estuaries</td>
      </tr>
      <tr>
        <td class="tg-o57c">44</td>
        <td class="tg-uk0n"></td>
        <td class="tg-0lax">523 - Sea and ocean</td>
      </tr>
      <tr>
        <td class="tg-thk7">48</td>
        <td class="tg-quxf"></td>
        <td class="tg-buh4">999 - NODATA</td>
      </tr>
    </tbody>
    </table>
</br>

## Description of representative images

*CORINE Land Cover dataset over the Alps in EO Browser.*
![CORINE Land Cover dataset over the Alps](fig/fig1.png)

*CORINE Land Cover dataset over Guadeloupe and Martinique, two French DOMs, in EO Browser.*
![CORINE Land Cover dataset over Guadeloupe and Martinique](fig/fig2.png)
