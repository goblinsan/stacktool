package com.goblinsan.stacktool;

import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

public class StackCalcsTest {

    @Test
    public void createGetProbeMarkings() {
        StackCalcs testObj = new StackCalcs();
        List expectedList = Arrays.asList(1,2,3,4);

        Assert.assertTrue(expectedList.equals(testObj.getProbeMarks(4,0,4)));

        expectedList = Arrays.asList(1,2);

        Assert.assertTrue(expectedList.equals(testObj.getProbeMarks(2,0,2)));

        expectedList = Arrays.asList(2,4);

        Assert.assertTrue(expectedList.equals(testObj.getProbeMarks(4,0,2)));

        expectedList = Arrays.asList(3,5);

        Assert.assertTrue(expectedList.equals(testObj.getProbeMarks(4,1,2)));
    }
}
