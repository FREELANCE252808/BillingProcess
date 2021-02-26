"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _base_model_1 = require("./_base.model");
var CompanyReportModel = /** @class */ (function (_super) {
    __extends(CompanyReportModel, _super);
    function CompanyReportModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanyReportModel.prototype.clear = function () {
        this.ProjectId = 0;
        this.CompanyID = 0;
    };
    return CompanyReportModel;
}(_base_model_1.BaseModel));
exports.CompanyReportModel = CompanyReportModel;
//# sourceMappingURL=CompanyReport.model.js.map