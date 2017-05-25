package com.goblinsan.stacktool.web.rest;

import com.goblinsan.stacktool.StackCalcs;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StackController {

    @RequestMapping("/pointCalcs")
    public ResponseEntity getTraversePoints(@RequestBody TraverseInputs traverseInputs){
        StackCalcs stackCalcs =  new StackCalcs();
        return ResponseEntity.ok(stackCalcs.getProbeMarks(traverseInputs.stackDiameter,traverseInputs.portDepth, traverseInputs.numberOfPoints));
    }

    private static class TraverseInputs {
        private Double stackDiameter;
        private Double portDepth;
        private int numberOfPoints;

        public void setStackDiameter(Double stackDiameter) {
            this.stackDiameter = stackDiameter;
        }

        public void setPortDepth(Double portDepth) {
            this.portDepth = portDepth;
        }

        public void setNumberOfPoints(int numberOfPoints) {
            this.numberOfPoints = numberOfPoints;
        }

        @Override
        public String toString() {
            return "TraverseInputs{" +
                "stackDiameter=" + stackDiameter +
                ", portDepth=" + portDepth +
                ", numberOfPoints=" + numberOfPoints +
                '}';
        }
    }
}
