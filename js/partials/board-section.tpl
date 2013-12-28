<div id="{{ boardSection.id }}" class="col-xs-6 col-sm-3 board-section">
    <div class="section-title">
      <span>{{ boardSection.title }}</span>
      <span class="velocity" ng-class="{danger: totalEffort > velocity, perfect: totalEffort == velocity, cool: totalEffort < velocity}">
        <span ng-show="velocity > 0">{{ totalEffort }} /</span>
        <input type="text" name="velocity" ng-model="velocity">
      </span>  
    </div>

    <card ng-repeat="card in boardSection.cards"></card>

</div>