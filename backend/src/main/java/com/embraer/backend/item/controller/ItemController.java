package com.embraer.backend.item.controller;

import com.embraer.backend.item.dto.ItemDTO;
import com.embraer.backend.item.entity.Item;
import com.embraer.backend.item.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping
public class ItemController {


    @Autowired
    private ItemService itemService;


    @CrossOrigin
    @GetMapping("/list-all/items")
    public List<ItemDTO> listAllItems() {
        return itemService.listAllItems();
    }




}
