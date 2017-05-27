package com.goblinsan.stacktool;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.*;

public class StackCalcs {

    private static Map<Integer, List<Double>> pointPercents;

    static {
        pointPercents = new HashMap<Integer, List<Double>>();
        pointPercents.put(2, Arrays.asList(14.6, 85.4));
        pointPercents.put(4, Arrays.asList(6.7, 25.0, 75.0, 93.3));
        pointPercents.put(6, Arrays.asList(4.4, 14.7, 29.5, 70.5, 85.3, 95.6));
        pointPercents.put(8, Arrays.asList(3.3, 10.5, 19.4, 32.3, 67.7, 80.6, 89.5, 96.7));
        pointPercents.put(10, Arrays.asList(2.5, 8.2, 14.6, 22.6, 34.2, 65.8, 77.4, 85.4, 91.8, 97.5));
        pointPercents.put(12, Arrays.asList(2.1, 6.7, 11.8, 17.7, 25.0, 35.5, 64.5, 75.0, 75.0, 88.2, 93.3, 97.9));
        pointPercents.put(14, Arrays.asList(1.8, 5.7, 9.9, 14.6, 20.1, 26.9, 36.6, 63.4, 63.4, 79.9, 85.4, 90.1, 94.3, 98.2));
        pointPercents.put(16, Arrays.asList(1.6, 4.9, 8.5, 12.5, 16.9, 22.0, 28.3, 37.5, 37.5, 71.7, 78.0, 83.1, 87.5, 91.5, 95.1, 98.4));
        pointPercents.put(18, Arrays.asList(1.4, 4.4, 7.5, 10.9, 14.6, 18.8, 23.6, 29.6, 29.6, 61.8, 70.4, 76.4, 81.2, 85.4, 89.1, 92.5, 95.6, 98.6));
        pointPercents.put(20, Arrays.asList(1.3, 3.9, 6.7, 9.7, 12.9, 16.5, 20.4, 25.0, 25.0, 38.8, 61.2, 69.4, 75.0, 79.6, 83.5, 87.1, 90.3, 93.3, 96.1, 98.7));
        pointPercents.put(22, Arrays.asList(1.1, 3.5, 6.0, 8.7, 11.6, 14.6, 18.0, 21.8, 21.8, 31.5, 39.3, 60.7, 68.5, 73.9, 78.2, 82.0, 85.4, 88.4, 91.3, 94.0, 96.5, 98.9));
        pointPercents.put(24, Arrays.asList(1.1, 3.2, 5.5, 7.9, 10.5, 13.2, 16.1, 19.4, 19.4, 27.2, 32.3, 39.8, 60.2, 67.7, 72.8, 77.0, 80.6, 83.9, 86.8, 89.5, 92.1, 94.5, 96.8, 98.9));
    }

    public List<String> getProbeMarks(Double stackDiameter, Double portDepth, int numPoints) throws IllegalArgumentException {
        int pointsPerPort = numPoints/2;
        if(null == portDepth) { portDepth = 0d; }
        if (null == pointPercents.get(pointsPerPort)){
            throw new IllegalArgumentException("Invalid Number of Traverse Points Provided");
        }
        List<String> points = new ArrayList<>();
        for (int i = 0; i < pointsPerPort; i++) {
            double distanceInStack = getPointLocation(pointPercents.get(pointsPerPort).get(i), stackDiameter);
            points.add(to2Decimals(distanceInStack + portDepth));
        }
        return points;
    }

    double getPointLocation(Double percent, Double stackDiameter) {
        return (percent/100) * stackDiameter;
    }

    private String to2Decimals(Double d) {
        NumberFormat formatter = new DecimalFormat("#0.00");
        return formatter.format(d);
    }
}
