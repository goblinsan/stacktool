package com.goblinsan.stacktool.cucumber.stepdefs;

import com.goblinsan.stacktool.StacktoolApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = StacktoolApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
