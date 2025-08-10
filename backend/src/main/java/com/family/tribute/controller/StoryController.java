package com.family.tribute.controller;

import com.family.tribute.model.Story;
import com.family.tribute.repository.StoryRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = {"*"})
public class StoryController {
    private final StoryRepository repo;
    public StoryController(StoryRepository repo) { this.repo = repo; }

    @GetMapping public List<Story> all() { return repo.findAll(); }
    @GetMapping("/member/{memberId}") public List<Story> byMember(@PathVariable Long memberId) { return repo.findByMemberId(memberId); }
    @PostMapping public Story create(@RequestBody Story s) { return repo.save(s); }
}