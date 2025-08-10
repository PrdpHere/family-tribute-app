package com.family.tribute.controller;

import com.family.tribute.model.Photo;
import com.family.tribute.repository.PhotoRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin(origins = {"*"})
public class PhotoController {
    private final PhotoRepository repo;
    public PhotoController(PhotoRepository repo) { this.repo = repo; }

    @GetMapping public List<Photo> all() { return repo.findAll(); }
    @GetMapping("/member/{memberId}") public List<Photo> byMember(@PathVariable Long memberId) { return repo.findByMemberId(memberId); }
    @PostMapping public Photo create(@RequestBody Photo p) { return repo.save(p); }
}