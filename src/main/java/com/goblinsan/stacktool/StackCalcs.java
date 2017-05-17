package com.goblinsan.stacktool;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StackCalcs {

    public List getProbeMarks(int stackDiameter, int portDepth, int numPoints) {
        int pointSpace = stackDiameter/numPoints;
        List points = new ArrayList();
        for (int i = 1; i <= numPoints; i++) {
            points.add(i*pointSpace+portDepth);
        }
        return points;
    }
}
